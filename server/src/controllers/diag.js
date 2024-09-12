const Database = require('../db/Database');
const sql = require('mssql');

exports.addNewDiag =  async (req, res) => {
    const { firstnameValue, lastnameValue, nationalCodeValue, ageValue, visitDate, cityValue,
             genderValue, radiologyType, otherDescription, 
             doctorName, statusOfEachCheckListItems} = req.body;

    try {
        const pool = await Database.connect();

        const insertDiagRequest = pool.request();
        const insertDiagResult = await insertDiagRequest
        .input('firstnameValue', sql.NVarChar, firstnameValue)
        .input('lastnameValue', sql.NVarChar, lastnameValue)
        .input('nationalCodeValue', sql.NVarChar, nationalCodeValue)
        .input('ageValue', sql.NVarChar, ageValue)
        .input('visitDate', sql.Date, visitDate)
        .input('cityValue', sql.NVarChar, cityValue)
        .input('genderValue', sql.NVarChar, genderValue)
        .input('radiologyType', sql.NVarChar, radiologyType)
        .input('otherDescription', sql.NVarChar, otherDescription)
        .input('doctorName', sql.NVarChar, doctorName)
        .query(`
            INSERT INTO Diagnosis (
                firstnameValue, lastnameValue, nationalCodeValue, ageValue, visitDate, cityValue,
                genderValue, radiologyType, otherDescription, doctorName
            )VALUES (
                @firstnameValue, @lastnameValue, @nationalCodeValue, @ageValue, @visitDate, @cityValue,
                @genderValue, @radiologyType, @otherDescription, @doctorName
            );
            SELECT SCOPE_IDENTITY() AS DiagID;
        `);

        const DiagID = insertDiagResult.recordset[0].DiagID;
        console.log("DiagID: ", DiagID);


            
        for (const item of statusOfEachCheckListItems) {
            
            const insertChecklistRequest = pool.request();
            await insertChecklistRequest
                .input('checkList', sql.NVarChar, item.checkList)
                .input('checkListStatus', sql.Bit, item.checkListStatus)
                .input('suspiciousCase', sql.Bit, item.SuspiciousCase)
                .input('descriptionOfSuspicius', sql.NVarChar, item.descriptionOfSuspicius)
                .input('diagID', sql.Int, DiagID)
                .query(`
                    INSERT INTO ChecklistItems (
                        CheckList, CheckListStatus, SuspiciousCase, DescriptionOfSuspicius, DiagID
                    )
                    VALUES (
                        @checkList, @checkListStatus, @suspiciousCase, @descriptionOfSuspicius, @diagID
                    );
                `);
        }
        

        res.status(201).json({ status: 'success', message: 'Diagnosis and ChecklistItems created successfully', DiagID });

    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Server error');
    }
};

exports.getTop3DiseasesOfPatient = async (req, res) => {
    try {
        const pool = await Database.connect();

        const getTop3DiseasesOfPatientRequest = pool.request();
        const getTop3DiseasesOfPatientResult = await getTop3DiseasesOfPatientRequest
        .query(`
            SELECT top 3 radiologyType, COUNT(*) as countOfPatient
            FROM Diagnosis group by radiologyType order by countOfPatient desc
        `);

        const top3Diseases = getTop3DiseasesOfPatientResult.recordset.map(disease => ({
            radiologyType: disease.radiologyType,
            countOfPatient: disease.countOfPatient
        }));

        res.status(200).json(top3Diseases);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top 3 diseases' });
    }


}
