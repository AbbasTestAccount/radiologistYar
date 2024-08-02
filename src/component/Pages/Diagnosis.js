import MyStepper from '../Stepper';
import './Diagnosis.css';
import React, { useState } from "react";
import AutocompleteBox from "../TextFieldsType/AutocompleteBox";
import RequiredBox from "../TextFieldsType/RequiredBox";
import NumberedBox from "../TextFieldsType/NumberedBox";
import TextArea from "../TextFieldsType/TextArea";
import Box from '@mui/material/Box';
import DatePicker from "../TextFieldsType/DatePicker";
import NationalCodeBox from '../TextFieldsType/NationalCodeBox'
const steps = [
  "Entering Patient Information",
  "Complete CheckBox",
  "Considerations",
];

function Diagnosis() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstnameValue, setFirstNameValue] = useState('');
  const [lastnameValue, setLastNameValue] = useState('');
  const [ageValue, setAgeValue] = useState(null);
  const [nationalCodeValue, setNationalCodeValue] = useState(null);
  const [visitDate, setVisitDate] = useState();
  const [radiologyType, setRadiologyType] = useState();
  const [otherDescription, setOtherDescription] = useState();
  const [isRequiredEmpty, setIsRequiredEmpty] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const checkRequiredTextField = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
    if (firstnameValue.trim() === '') {
      setIsRequiredEmpty(true);
    } else {
      setIsRequiredEmpty(false);
    }
  };

  const boxWidth = '300px'
  return (
    <div className='Diagnosis-page'>
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>
      <hr></hr>
      <div>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <Box sx={{ width: boxWidth }}>
            <RequiredBox
              isRequiredEmpty={hasSubmitted && isRequiredEmpty}
              requiredValue={firstnameValue}
              setRequiredValue={setFirstNameValue}
              setIsRequiredEmpty={setIsRequiredEmpty}
            />
          </Box>
          <Box sx={{ width: boxWidth }}>
            <RequiredBox
              isRequiredEmpty={hasSubmitted && isRequiredEmpty}
              requiredValue={lastnameValue}
              setRequiredValue={setLastNameValue}
              setIsRequiredEmpty={setIsRequiredEmpty}
            />
          </Box>
          <Box sx={{ width: boxWidth }}>
            <NationalCodeBox/>
          </Box>
          <Box sx={{ width: boxWidth }}>
            <NumberedBox />
          </Box>
          <Box sx={{ width: boxWidth }}>
            <AutocompleteBox />
          </Box>
          <Box sx={{ width: boxWidth }}>
            <DatePicker />
          </Box>
          <TextArea />
        </Box>
        <br></br>
        <button type="submit" onClick={checkRequiredTextField}>Submit</button>
      </div>
    </div>
  );
}

export default Diagnosis;
