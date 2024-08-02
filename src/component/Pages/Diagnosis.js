import MyStepper from '../Stepper';
import './Diagnosis.css';
import React, { useState, useEffect } from "react";
import AutocompleteBox from "../TextFieldsType/AutocompleteBox";
import RequiredBox from "../TextFieldsType/RequiredBox";
import NumberedBox from "../TextFieldsType/NumberedBox";
import TextArea from "../TextFieldsType/TextArea";
import Box from '@mui/material/Box';
import DatePicker from "../TextFieldsType/DatePicker";
import NationalCodeBox from '../TextFieldsType/NationalCodeBox'
import '../submitBtn.css'

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
  const [ageValue, setAgeValue] = useState(null);
  const [visitDate, setVisitDate] = useState();
  const [radiologyType, setRadiologyType] = useState();
  const [otherDescription, setOtherDescription] = useState();


  const [isNameRequiredEmpty, setIsNameRequiredEmpty] = useState(false);
  const [isLastNameRequiredEmpty, setIsLastNameRequiredEmpty] = useState(false);
  const [isNationalCodeRequiredEmpty, setIsNationalCodeRequiredEmpty] = useState(false);
  
  
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  
  const [padding, setPadding] = useState(0);

  const calculatePadding = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth>1200) {
      setPadding((containerWidth-1200)/2);
    }else{
      setPadding(0);
    }
  };

  useEffect(() => {
    calculatePadding();
    window.addEventListener('resize', calculatePadding);

    return () => window.removeEventListener('resize', calculatePadding);
  }, []);

  const checkRequiredTextField = (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (firstnameValue.trim() === '') {
      setIsNameRequiredEmpty(true);
    } else {
      setIsNameRequiredEmpty(false);
    }

    if (lastnameValue.trim() === '') {
      setIsLastNameRequiredEmpty(true);
    } else {
      setIsLastNameRequiredEmpty(false);
    }

    if (nationalCodeValue === '') {
      setIsNationalCodeRequiredEmpty(true);
    } else {
      if (nationalCodeValue.length !== 10) {
        console.error("nationalCodeValue is lower than 10, it's :", nationalCodeValue.length);
        setIsNationalCodeRequiredEmpty(true);
      }else{
        setIsNationalCodeRequiredEmpty(false);
      }
    }

  };

  return (
    <div className='Diagnosis-page'>
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>
      <hr></hr>
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
            isRequiredEmpty={hasSubmitted && isNationalCodeRequiredEmpty}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <NumberedBox />
        </Box>
        <Box sx={{ width: 300 }}>
          <AutocompleteBox />
        </Box>
        <Box sx={{ width: 300 }}>
          <DatePicker />
        </Box>
        <TextArea />
      </Box>
      <br></br>
      <button id='submitBtn' type="submit" onClick={checkRequiredTextField}>Submit</button>

    </div>
  );
}

export default Diagnosis;
