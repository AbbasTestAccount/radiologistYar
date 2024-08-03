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
import dayjs from 'dayjs';
import { Alert } from '@mui/material';

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

  const [nationalCodeValueLength, setNationalCodeValueLength] = useState(10);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [padding, setPadding] = useState(0);

  const calculatePadding = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth > 1200) {
      setPadding((containerWidth - 1200) / 2);
    } else {
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
    } else {
      setIsAgeValueRequiredEmpty(false);
    }

    if (radiologyType === null) {
      setIsRadiologyTypeRequiredEmpty(true);
    } else {
      setIsRadiologyTypeRequiredEmpty(false);
    }
  };

  useEffect(() => {
    if (visitDate) {
      console.log(`${visitDate.$y} ${visitDate.$M + 1} ${visitDate.$D} `);
    } else {
      console.log("null value !!");
    }
  }, [visitDate]);

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
            isRequiredEmpty={hasSubmitted && isNationalCodeRequiredEmpty && nationalCodeValueLength === 10}
          />
        </Box>

        <Box sx={{ width: 300 }}>
          <NumberedBox
            ageValue={ageValue}
            setAgeValue={setAgeValue}
            isRequiredEmpty={hasSubmitted && isAgeValueRequiredEmpty} />
        </Box>

        <Box sx={{ width: 300 }}>
          <AutocompleteBox
            radiologyType={radiologyType}
            setRadiologyType={setRadiologyType}
            isRequiredEmpty={hasSubmitted && isRadiologyTypeRequiredEmpty} />
        </Box>
        <Box sx={{ width: 300 }}>
          <DatePicker
            visitDate={visitDate}
            setVisitDate={setVisitDate} />
        </Box>
        <TextArea otherDescription={otherDescription} setOtherDescription={setOtherDescription} />
      </Box>
      <br></br>
      <button id='submitBtn' type="submit" onClick={checkRequiredTextField}>Submit</button>

      <br></br>
      <br></br>

      {isNameRequiredEmpty
        ? <Alert className='alert alert-enter' severity="error">First Name is Empty</Alert> : null
      }

      {isLastNameRequiredEmpty
        ? <Alert className='alert alert-enter' severity="error">Last Name is Empty</Alert> : null
      }

      {nationalCodeValueLength !== 10
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
    </div>
  );
}

export default Diagnosis;
