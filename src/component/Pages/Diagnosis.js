import MyStepper from '../Stepper';
import './Diagnosis.css';
import React, { useState } from "react";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

function Diagnosis() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className='Diagnosis-page'>
      <MyStepper steps={steps} activeStep={activeStep}></MyStepper>

    </div>

  );
}

export default Diagnosis;
