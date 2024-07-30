import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import './Stepper.css'
import { useEffect , useState } from "react";


function MyStepper(props) {
    const steps = props.steps
    const [activeStep , setActiveStep] = useState(0)
    
    useEffect(()=>{
        setActiveStep(props.activeStep)
    },[props.activeStep])

  return (
    <Box className="stepper-comp" sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}


export default MyStepper;
