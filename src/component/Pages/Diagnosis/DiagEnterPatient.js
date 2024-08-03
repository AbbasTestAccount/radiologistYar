import React,{useEffect} from "react";
import AutocompleteBox from "../../TextFieldsType/AutocompleteBox";
import RequiredBox from "../../TextFieldsType/RequiredBox";
import NumberedBox from "../../TextFieldsType/NumberedBox";
import TextArea from "../../TextFieldsType/TextArea";
import Box from '@mui/material/Box';
import DatePicker from "../../TextFieldsType/DatePicker";
import NationalCodeBox from '../../TextFieldsType/NationalCodeBox'
import { Alert } from '@mui/material';



function DiagEnterPatient(props) {
    const setFirstNameValue = props.setFirstNameValue
    const setLastNameValue = props.setLastNameValue
    const setNationalCodeValue = props.setNationalCodeValue
    const setAgeValue = props.setAgeValue
    const setVisitDate = props.setVisitDate
    const setRadiologyType = props.setRadiologyType
    const setOtherDescription = props.setOtherDescription

    const firstnameValue = props.firstnameValue
    const lastnameValue = props.lastnameValue
    const nationalCodeValue = props.nationalCodeValue
    const ageValue = props.ageValue
    const visitDate = props.visitDate
    const radiologyType = props.radiologyType
    const otherDescription = props.otherDescription

    const isNameRequiredEmpty = props.isNameRequiredEmpty
    const isLastNameRequiredEmpty = props.isLastNameRequiredEmpty
    const isNationalCodeRequiredEmpty = props.isNationalCodeRequiredEmpty
    const isAgeValueRequiredEmpty = props.isAgeValueRequiredEmpty
    const isRadiologyTypeRequiredEmpty = props.isRadiologyTypeRequiredEmpty

    
    
    const setIsNameRequiredEmpty = props.setIsNameRequiredEmpty
    const setIsLastNameRequiredEmpty = props.setIsLastNameRequiredEmpty
    const setIsNationalCodeRequiredEmpty = props.setIsNationalCodeRequiredEmpty
    const setIsAgeValueRequiredEmpty = props.setIsAgeValueRequiredEmpty
    const setIsRadiologyTypeRequiredEmpty = props.setIsRadiologyTypeRequiredEmpty
    
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
                radiologyType={radiologyType}
                setRadiologyType={setRadiologyType}
                isRequiredEmpty={hasSubmitted && isRadiologyTypeRequiredEmpty}
                setIsRadiologyTypeRequiredEmpty={setIsRadiologyTypeRequiredEmpty} />
            </Box>
            <Box sx={{ width: 300 }}>
            <DatePicker
                visitDate={visitDate}
                setVisitDate={setVisitDate} />
            </Box>
            <TextArea otherDescription={otherDescription} setOtherDescription={setOtherDescription} />
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
    </div>
    
  );
}

export default DiagEnterPatient;
