import React, { useState } from "react";
import dayjs from 'dayjs';
import MyStepper from '../Stepper';
import DiagEnterPatient from './Diagnosis/DiagEnterPatient';
import Checklist from './Diagnosis/CheckList';
import { CssBaseline } from '@mui/material';
import '../submitBtn.css';
import './Diagnosis.css';
import { CheckList1, CheckList2 } from './Diagnosis/CheckListArray';

const steps = [
  "Entering Patient Information",
  "Complete CheckBox",
  "Considerations",
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

  // Determine which checklist to show based on the selected radiology type
  const getChecklistItems = () => {
    if (radiologyType === 'Central and Peripheral Nervous System') {
      return CheckList1.CheckLists;
    } else if (radiologyType === 'Fetal Heart') {
      return CheckList2.CheckLists;
    } else {
      return [];
    }
  };

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
          nationalCodeValueLength={nationalCodeValueLength}
          setNationalCodeValueLength={setNationalCodeValueLength}
          hasSubmitted={hasSubmitted}
          setHasSubmitted={setHasSubmitted}
          padding={padding}
          setPadding={setPadding}
        />
      ) : null}

      {activeStep === 1 ? (
        <Checklist items={getChecklistItems()} radiologyType={radiologyType} setActiveStep={setActiveStep}/>
      ) : null}
    </div>
  );
}

export default Diagnosis;
