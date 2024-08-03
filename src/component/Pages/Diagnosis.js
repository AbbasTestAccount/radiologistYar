import MyStepper from '../Stepper';
import './Diagnosis.css';
import React, { useState, useEffect } from "react";
import '../submitBtn.css'
import dayjs from 'dayjs';
import DiagEnterPatient from './Diagnosis/DiagEnterPatient';
import Checklist from './Diagnosis/CheckList';
import { CssBaseline } from '@mui/material';


const steps = [
  "Entering Patient Information",
  "Complete CheckBox",
  "Considerations",
];
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5'
];

function Diagnosis() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstnameValue, setFirstNameValue] = useState('');
  const [lastnameValue, setLastNameValue] = useState('');
  const [nationalCodeValue, setNationalCodeValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [visitDate, setVisitDate] = useState(dayjs());
  const [radiologyType, setRadiologyType] = useState(null);
  const [otherDescription, setOtherDescription] = useState();

  const [isNameRequiredEmpty, setIsNameRequiredEmpty] = useState(false);
  const [isLastNameRequiredEmpty, setIsLastNameRequiredEmpty] = useState(false);
  const [isNationalCodeRequiredEmpty, setIsNationalCodeRequiredEmpty] = useState(false);
  const [isAgeValueRequiredEmpty, setIsAgeValueRequiredEmpty] = useState(false);
  const [isRadiologyTypeRequiredEmpty, setIsRadiologyTypeRequiredEmpty] = useState(false);

  const [nationalCodeValueLength, setNationalCodeValueLength] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [padding, setPadding] = useState(0);



  return (
    <div className='Diagnosis-page'>
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>
      <hr></hr>
      {activeStep === 0?
        <DiagEnterPatient setActiveStep={setActiveStep}
          setFirstNameValue={setFirstNameValue}
          setLastNameValue={setLastNameValue}
          setNationalCodeValue={setNationalCodeValue}
          setAgeValue={setAgeValue}
          setVisitDate={setVisitDate}
          setRadiologyType={setRadiologyType}
          setOtherDescription={setOtherDescription}
          firstnameValue={firstnameValue}
          lastnameValue={lastnameValue}
          nationalCodeValue={nationalCodeValue}
          ageValue={ageValue}
          visitDate={visitDate}
          radiologyType={radiologyType}
          otherDescription={otherDescription}
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
          nationalCodeValueLength = {nationalCodeValueLength}
          setNationalCodeValueLength = {setNationalCodeValueLength}
          hasSubmitted = {hasSubmitted}
          setHasSubmitted = {setHasSubmitted}
          padding = {padding}
          setPadding = {setPadding}
        />
      :null}

      {activeStep === 1?
        <Checklist items={items} />
      :null}



      
    </div>
  );
}

export default Diagnosis;
