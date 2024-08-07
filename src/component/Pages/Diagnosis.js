import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import MyStepper from '../Stepper';
import DiagEnterPatient from './Diagnosis/DiagEnterPatient';
import Checklist from './Diagnosis/CheckList';
import Considerations from './Diagnosis/Considerations';
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
  const [otherDescription, setOtherDescription] = useState('');

  const [isNameRequiredEmpty, setIsNameRequiredEmpty] = useState(false);
  const [isLastNameRequiredEmpty, setIsLastNameRequiredEmpty] = useState(false);
  const [isNationalCodeRequiredEmpty, setIsNationalCodeRequiredEmpty] = useState(false);
  const [isAgeValueRequiredEmpty, setIsAgeValueRequiredEmpty] = useState(false);
  const [isRadiologyTypeRequiredEmpty, setIsRadiologyTypeRequiredEmpty] = useState(false);

  const [nationalCodeValueLength, setNationalCodeValueLength] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [padding, setPadding] = useState(0);

  const getChecklistItems = () => {
    if (radiologyType === 'Central and Peripheral Nervous System') {
      return CheckList1.CheckLists;
    } else if (radiologyType === 'Fetal Heart') {
      return CheckList2.CheckLists;
    } else {
      return [];
    }
  };

  const [statusOfEachCheckListItems, setStatusOfEachCheckListItems] = useState([]);

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
          setDescription={setOtherDescription}
          firstnameValue={firstnameValue}
          lastnameValue={lastnameValue}
          nationalCodeValue={nationalCodeValue}
          ageValue={ageValue}
          visitDate={visitDate}
          radiologyType={radiologyType}
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
    </div>
  );
}

export default Diagnosis;
