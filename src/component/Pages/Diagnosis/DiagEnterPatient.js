import React,{useEffect} from "react";
import AutocompleteBox from "../../TextFieldsType/AutocompleteBox";
import RequiredBox from "../../TextFieldsType/RequiredBox";
import NumberedBox from "../../TextFieldsType/NumberedBox";
import TextArea from "../../TextFieldsType/TextArea";
import Box from '@mui/material/Box';
import DatePicker from "../../TextFieldsType/DatePicker";
import NationalCodeBox from '../../TextFieldsType/NationalCodeBox'
import { Alert } from '@mui/material';
import ReadOnlyBox from "../../TextFieldsType/ReadOnlyBox";


const radiologyTypes = [
  "Fetal Development and Congenital Anomalies",
  "Second- and Third-Trimester Screening Ultrasound",
  "Equipment, Transducers, and Set-Up",
  "Central and Peripheral Nervous System",
  "Face and Neck Anomalies",
  "Lymphatic Anomalies and Hydrops",
  "Fetal Heart",
  "Thoracic Anomalies",
  "Gastrointestinal Tract",
  "Urinary Tract Anomalies",
  "Disorders of Sex Development",
  "Skeletal Dysplasias and Muscular Anomalies",
  "Syndromic Conditions",
  "Ultrasound in Fetal Infections",
  "Ultrasound in Multiple Pregnancy"
];

const cityTypes = [
"آذربایجان شرقی",
"آذربایجان غربی",
"اردبیل",
"اصفهان",
"البرز",
"ایلام",
"بوشهر",
"تهران",
"چهارمحال و بختیاری",
"خراسان جنوبی",
"خراسان رضوی",
"خراسان شمالی",
"خوزستان",
"زنجان",
"سمنان",
"سیستان و بلوچستان",
"فارس",
"قزوین",
"قم",
"کردستان",
"کرمان",
"کرمانشاه",
"کهگیلویه و بویراحمد",
"گلستان",
"گیلان",
"لرستان",
"مازندران",
"مرکزی",
"هرمزگان",
"همدان",
"یزد"
]

const genderTypes = ["male", "female"]


function DiagEnterPatient(props) {
    const setFirstNameValue = props.setFirstNameValue
    const setLastNameValue = props.setLastNameValue
    const setNationalCodeValue = props.setNationalCodeValue
    const setAgeValue = props.setAgeValue
    const setVisitDate = props.setVisitDate
    const setRadiologyType = props.setRadiologyType
    const setCityValue = props.setCityValue
    const setGenderValue = props.setGenderValue
    const setDescription = props.setDescription

    const firstnameValue = props.firstnameValue
    const lastnameValue = props.lastnameValue
    const nationalCodeValue = props.nationalCodeValue
    const ageValue = props.ageValue
    const visitDate = props.visitDate
    const radiologyType = props.radiologyType
    const cityValue = props.cityValue
    const genderValue = props.genderValue
    const description = props.description
    

    const isNameRequiredEmpty = props.isNameRequiredEmpty
    const isLastNameRequiredEmpty = props.isLastNameRequiredEmpty
    const isNationalCodeRequiredEmpty = props.isNationalCodeRequiredEmpty
    const isAgeValueRequiredEmpty = props.isAgeValueRequiredEmpty
    const isRadiologyTypeRequiredEmpty = props.isRadiologyTypeRequiredEmpty
    const isCityValueRequiredEmpty = props.isCityValueRequiredEmpty
    const isGenderValueRequiredEmpty = props.isGenderValueRequiredEmpty

    
    
    const setIsNameRequiredEmpty = props.setIsNameRequiredEmpty
    const setIsLastNameRequiredEmpty = props.setIsLastNameRequiredEmpty
    const setIsNationalCodeRequiredEmpty = props.setIsNationalCodeRequiredEmpty
    const setIsAgeValueRequiredEmpty = props.setIsAgeValueRequiredEmpty
    const setIsRadiologyTypeRequiredEmpty = props.setIsRadiologyTypeRequiredEmpty
    const setIsCityValueRequiredEmpty = props.setIsCityValueRequiredEmpty
    const setIsGenderValueRequiredEmpty = props.setIsGenderValueRequiredEmpty

    const nationalCodeValueLength = props.nationalCodeValueLength  
    const setNationalCodeValueLength = props.setNationalCodeValueLength
    const hasSubmitted = props.hasSubmitted  
    const setHasSubmitted = props.setHasSubmitted
    const padding = props.padding  
    const setPadding = props.setPadding

    const setActiveStep = props.setActiveStep
    
    useEffect(() => {
        calculatePadding();
        window.addEventListener('resize', calculatePadding);
    
        return () => window.removeEventListener('resize', calculatePadding);
    }, []);

    useEffect(() => {
      if (visitDate) {
        console.log(`${visitDate.$y} ${visitDate.$M + 1} ${visitDate.$D} `);
      } else {
        console.log("null value !!");
      }
    }, [visitDate]);
    
    const calculatePadding = () => {
        const containerWidth = window.innerWidth;
        if (containerWidth > 1200) {
          setPadding((containerWidth - 1200) / 2);
        } else {
          setPadding(0);
        }
    };

    const submitBtnClicked = (event, setActiveStep)=>{
        event.preventDefault();

        setHasSubmitted(true);
        if(checkRequiredTextField()){
            setActiveStep(1)
        }

    }

    const checkRequiredTextField = () => {
        let canSubmit = true

        if (firstnameValue.trim() === '') {
          setIsNameRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsNameRequiredEmpty(false);
        }
    
        if (lastnameValue.trim() === '') {
          setIsLastNameRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsLastNameRequiredEmpty(false);
        }
    
        if (nationalCodeValue === '') {
          setIsNationalCodeRequiredEmpty(true);
          canSubmit = false
        } else {
          if (nationalCodeValue.length !== 10) {
            canSubmit = false
            setNationalCodeValueLength(nationalCodeValue.length);
            console.error("nationalCodeValue is lower than 10, it's :", nationalCodeValue.length);
            setIsNationalCodeRequiredEmpty(false);
          } else {
            setNationalCodeValueLength(10);
            setIsNationalCodeRequiredEmpty(false);
          }
        }
    
        if (ageValue === '') {
          setIsAgeValueRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsAgeValueRequiredEmpty(false);
        }
    
        if (radiologyType === null) {
          setIsRadiologyTypeRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsRadiologyTypeRequiredEmpty(false);
        }

        if (cityValue === null) {
          setIsCityValueRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsCityValueRequiredEmpty(false);
        }

        if (genderValue === null) {
          setIsGenderValueRequiredEmpty(true);
          canSubmit = false
        } else {
          setIsGenderValueRequiredEmpty(false);
        }

        return canSubmit;
    };


return (
    
    <div>
        <Box
            id='boxContainer'
            sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
            }}
        >
            <Box sx={{ width: 300 }}>
            <RequiredBox
                label={'First Name'}
                isRequiredEmpty={hasSubmitted && isNameRequiredEmpty}
                requiredValue={firstnameValue}
                setRequiredValue={setFirstNameValue}
                setIsRequiredEmpty={setIsNameRequiredEmpty}
            />
            </Box>

            <Box sx={{ width: 300 }}>
            <RequiredBox
                label={'Last Name'}
                isRequiredEmpty={hasSubmitted && isLastNameRequiredEmpty}
                requiredValue={lastnameValue}
                setRequiredValue={setLastNameValue}
                setIsRequiredEmpty={setIsLastNameRequiredEmpty}
            />
            </Box>

            <Box sx={{ width: 300 }}>
            <NationalCodeBox
                nationalCodeValue={nationalCodeValue}
                setNationalCodeValue={setNationalCodeValue}
                isRequiredEmpty={hasSubmitted && isNationalCodeRequiredEmpty && nationalCodeValueLength !== 10}
                setNationalCodeValueLength={setNationalCodeValueLength}

            />
            </Box>

            <Box sx={{ width: 300 }}>
            <NumberedBox
                ageValue={ageValue}
                setAgeValue={setAgeValue}
                isRequiredEmpty={hasSubmitted && isAgeValueRequiredEmpty} 
                setIsAgeValueRequiredEmpty={setIsAgeValueRequiredEmpty}/>
            </Box>

            <Box sx={{ width: 300 }}>
            <AutocompleteBox
                type={genderValue}
                setType={setGenderValue}
                isRequiredEmpty={hasSubmitted && isGenderValueRequiredEmpty}
                setIsTypeRequiredEmpty={setIsGenderValueRequiredEmpty}
                options={genderTypes}
                label="Gender" />
            </Box>
            <Box sx={{ width: 300 }}>
            <AutocompleteBox
                type={radiologyType}
                setType={setRadiologyType}
                isRequiredEmpty={hasSubmitted && isRadiologyTypeRequiredEmpty}
                setIsTypeRequiredEmpty={setIsRadiologyTypeRequiredEmpty}
                options={radiologyTypes}
                label="Radiology Type" />
            </Box>

            <Box sx={{ width: 300 }}>
            <DatePicker
                visitDate={visitDate}
                setVisitDate={setVisitDate} />
            </Box>
            <Box sx={{ width: 300 }}>
            <AutocompleteBox
                type={cityValue}
                setType={setCityValue}
                isRequiredEmpty={hasSubmitted && isCityValueRequiredEmpty}
                setIsTypeRequiredEmpty={setIsCityValueRequiredEmpty}
                options={cityTypes}
                label="Province" />
            </Box>
            <Box sx={{ width: 300 }}>
              <ReadOnlyBox/>
            </Box>
            <TextArea description={description} setDescription={setDescription} placeholder={"Other descriptions..."} />
        </Box>
        <br></br>
        <button id='submitBtn' type="submit" onClick={(event)=>{submitBtnClicked(event, setActiveStep)}}>Submit</button>
        <br></br>
        <br></br>

        {isNameRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">First Name is Empty</Alert> : null
        }

        {isLastNameRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">Last Name is Empty</Alert> : null
        }

        {hasSubmitted && nationalCodeValueLength !== 10
          ? <Alert className='alert alert-enter' severity="error">National Code is lower than 10</Alert> : null
        }

        {isNationalCodeRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">National Code is Empty</Alert> : null
        }

        {isAgeValueRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">Age is Empty</Alert> : null
        }

        {isRadiologyTypeRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">Radiology Type is Empty</Alert> : null
        }
        {isCityValueRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">Province is Empty</Alert> : null
        }
        {isGenderValueRequiredEmpty
          ? <Alert className='alert alert-enter' severity="error">Gender is Empty</Alert> : null
        }
    </div>
    
  );
}

export default DiagEnterPatient;
