import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import MyStepper from '../Stepper';
import DiagEnterPatient from './Diagnosis/DiagEnterPatient';
import Checklist from './Diagnosis/CheckList';
import Considerations from './Diagnosis/Considerations';
import ReportComponent from './Diagnosis/Report';
import { CssBaseline } from '@mui/material';
import '../submitBtn.css';
import './Diagnosis.css';
import { CheckList1, CheckList2 } from '../Lists/CheckListArray';

const steps = [
  "Entering Patient Information",
  "Complete CheckBox",
  "Considerations",
  "Report",
];

function Diagnosis() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstnameValue, setFirstNameValue] = useState('');
  const [lastnameValue, setLastNameValue] = useState('');
  const [nationalCodeValue, setNationalCodeValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [visitDate, setVisitDate] = useState(dayjs());
  const [radiologyType, setRadiologyType] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [otherDescription, setOtherDescription] = useState('');

  const [isNameRequiredEmpty, setIsNameRequiredEmpty] = useState(false);
  const [isLastNameRequiredEmpty, setIsLastNameRequiredEmpty] = useState(false);
  const [isNationalCodeRequiredEmpty, setIsNationalCodeRequiredEmpty] = useState(false);
  const [isAgeValueRequiredEmpty, setIsAgeValueRequiredEmpty] = useState(false);
  const [isRadiologyTypeRequiredEmpty, setIsRadiologyTypeRequiredEmpty] = useState(false);
  const [isCityValueRequiredEmpty, setIsCityValueRequiredEmpty] = useState(false);
  const [isGenderValueRequiredEmpty, setIsGenderValueRequiredEmpty] = useState(false);

  const [statusOfEachCheckListItems, setStatusOfEachCheckListItems] = useState([]);

  const [nationalCodeValueLength, setNationalCodeValueLength] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [padding, setPadding] = useState(0);

  const [endOfProcess, setEndOfProcess] = useState(false)

  const getChecklistItems = () => {
    if (radiologyType === 'Central and Peripheral Nervous System') {
      return CheckList1.CheckLists;
    } else if (radiologyType === 'Fetal Heart') {
      return CheckList2.CheckLists;
    } else {
      return [];
    }
  };

  useEffect(()=>{
    if(endOfProcess){
      setActiveStep(0)
      setFirstNameValue('')
      setLastNameValue('')
      setNationalCodeValue('')
      setAgeValue('')
      setVisitDate(dayjs())
      setRadiologyType(null)
      setCityValue(null)
      setGenderValue(null)
      setOtherDescription('')
      setIsNameRequiredEmpty(false)
      setIsLastNameRequiredEmpty(false)
      setIsNationalCodeRequiredEmpty(false)
      setIsAgeValueRequiredEmpty(false)
      setIsRadiologyTypeRequiredEmpty(false)
      setIsCityValueRequiredEmpty(false)
      setIsGenderValueRequiredEmpty(false)
      setNationalCodeValueLength(0)
      setHasSubmitted(false)
      setStatusOfEachCheckListItems([])
      
      setEndOfProcess(false)
    }
  },[endOfProcess])

  useEffect(() => {
    setStatusOfEachCheckListItems(getChecklistItems());
  }, [radiologyType]);

  useEffect(() => {
    console.log("statusOfEachCheckListItems : ", statusOfEachCheckListItems);
  }, [statusOfEachCheckListItems]);

  return (
    <div className='Diagnosis-page'>
      <CssBaseline />
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>
      <hr></hr>
      {activeStep === 0 ? (
        <DiagEnterPatient
          setActiveStep={setActiveStep}
          setFirstNameValue={setFirstNameValue}
          setLastNameValue={setLastNameValue}
          setNationalCodeValue={setNationalCodeValue}
          setAgeValue={setAgeValue}
          setVisitDate={setVisitDate}
          setRadiologyType={setRadiologyType}
          setCityValue={setCityValue}
          setGenderValue={setGenderValue}
          setDescription={setOtherDescription}
          firstnameValue={firstnameValue}
          lastnameValue={lastnameValue}
          nationalCodeValue={nationalCodeValue}
          ageValue={ageValue}
          visitDate={visitDate}
          radiologyType={radiologyType}
          cityValue={cityValue}
          genderValue={genderValue}
          description={otherDescription}
          isNameRequiredEmpty={isNameRequiredEmpty}
          setIsNameRequiredEmpty={setIsNameRequiredEmpty}
          isLastNameRequiredEmpty={isLastNameRequiredEmpty}
          setIsLastNameRequiredEmpty={setIsLastNameRequiredEmpty}
          isNationalCodeRequiredEmpty={isNationalCodeRequiredEmpty}
          setIsNationalCodeRequiredEmpty={setIsNationalCodeRequiredEmpty}
          isAgeValueRequiredEmpty={isAgeValueRequiredEmpty}
          setIsAgeValueRequiredEmpty={setIsAgeValueRequiredEmpty}
          isRadiologyTypeRequiredEmpty={isRadiologyTypeRequiredEmpty}
          setIsRadiologyTypeRequiredEmpty={setIsRadiologyTypeRequiredEmpty}
          isCityValueRequiredEmpty={isCityValueRequiredEmpty}
          isGenderValueRequiredEmpty={isGenderValueRequiredEmpty}
          setIsCityValueRequiredEmpty={setIsCityValueRequiredEmpty}
          setIsGenderValueRequiredEmpty={setIsGenderValueRequiredEmpty}
          nationalCodeValueLength={nationalCodeValueLength}
          setNationalCodeValueLength={setNationalCodeValueLength}
          hasSubmitted={hasSubmitted}
          setHasSubmitted={setHasSubmitted}
          padding={padding}
          setPadding={setPadding}
        />
      ) : null}

      {activeStep === 1 ? (
        <Checklist
          items={statusOfEachCheckListItems}
          radiologyType={radiologyType}
          setActiveStep={setActiveStep}
          statusOfEachCheckListItems={statusOfEachCheckListItems}
          setStatusOfEachCheckListItems={setStatusOfEachCheckListItems}
        />
      ) : null}

      {activeStep === 2 ? (
        <Considerations label={"other Descriptions :"} setActiveStep={setActiveStep} statusOfEachCheckListItems={statusOfEachCheckListItems} setStatusOfEachCheckListItems={setStatusOfEachCheckListItems} />
      ) : null}

      {activeStep === 3 ? (
        <ReportComponent
          firstnameValue={firstnameValue}
          lastnameValue={lastnameValue}
          nationalCodeValue={nationalCodeValue}
          ageValue={ageValue}
          visitDate={visitDate}
          radiologyType={radiologyType}
          cityValue={cityValue}
          genderValue={genderValue}
          otherDescription={otherDescription}
          statusOfEachCheckListItems={statusOfEachCheckListItems}
          setEndOfProcess={setEndOfProcess}
        />
      ) : null}
    </div>
  );
}

export default Diagnosis;
