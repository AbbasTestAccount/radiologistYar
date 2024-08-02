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
  const [ageValue, setAgeValue] = useState(null);
  const [nationalCodeValue, setNationalCodeValue] = useState(null);
  const [visitDate, setVisitDate] = useState();
  const [radiologyType, setRadiologyType] = useState();
  const [otherDescription, setOtherDescription] = useState();
  const [isRequiredEmpty, setIsRequiredEmpty] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [padding, setPadding] = useState(0);


  useEffect(() => {
    const calculatePadding = () => {
      const containerWidth = window.innerWidth;
      const boxWidth = 300; // Width of each box
      const gap = 16; // Gap between boxes

      const maxBoxesPerRow = 3;
      const totalBoxWidth = boxWidth * maxBoxesPerRow + gap * (maxBoxesPerRow - 1);
      if (containerWidth>1200) {
        setPadding((containerWidth-1200)/2);
      }else{
        setPadding(0);

      }
    };

    calculatePadding();
    window.addEventListener('resize', calculatePadding);

    return () => window.removeEventListener('resize', calculatePadding);
  }, []);

  const checkRequiredTextField = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
    if (firstnameValue.trim() === '') {
      setIsRequiredEmpty(true);
    } else {
      setIsRequiredEmpty(false);
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
            isRequiredEmpty={hasSubmitted && isRequiredEmpty}
            requiredValue={firstnameValue}
            setRequiredValue={setFirstNameValue}
            setIsRequiredEmpty={setIsRequiredEmpty}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <RequiredBox
            isRequiredEmpty={hasSubmitted && isRequiredEmpty}
            requiredValue={lastnameValue}
            setRequiredValue={setLastNameValue}
            setIsRequiredEmpty={setIsRequiredEmpty}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <NationalCodeBox/>
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
