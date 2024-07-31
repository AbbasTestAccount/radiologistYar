import MyStepper from '../Stepper';
import './Diagnosis.css';
import React, { useState } from "react";
import AutocompleteBox from "../TextFieldsType/AutocompleteBox"
import RequiredBox from "../TextFieldsType/RequiredBox"
import NumberedBox from "../TextFieldsType/NumberedBox"
import TextArea from "../TextFieldsType/TextArea"
import Box from '@mui/material/Box';
import DatePicker from "../TextFieldsType/DatePicker"



const steps = [
  "Entering Patient Information",
  "Complete CheckBox",
  "Considerations",
];



function Diagnosis() {
  const [activeStep, setActiveStep] = useState(0)
  const [isRequiredEmpty, setIsRequiredEmpty] = useState(false);
  const [requiredValue, setRequiredValue] = useState('');


  const checkRequiredTextField = (event) => {
    event.preventDefault();
    if (requiredValue.trim() === '') {
      setIsRequiredEmpty(true);
    } else {
      setIsRequiredEmpty(false);
    }
  };

  return (
    <div className='Diagnosis-page'>
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>
      <hr></hr>
      <div>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <RequiredBox isRequiredEmpty={isRequiredEmpty} requiredValue={requiredValue} setRequiredValue={setRequiredValue}></RequiredBox>
        <NumberedBox></NumberedBox>

        <AutocompleteBox/>
        <DatePicker></DatePicker>

        <TextArea></TextArea>
            
        </Box>
        
        <br></br>
        <button type="submit" onClick={checkRequiredTextField}>Submit</button>


      </div>
    </div>

  );
}

export default Diagnosis;
