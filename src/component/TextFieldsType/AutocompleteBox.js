import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function AutocompleteBox(props) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={radiologyTypes}
      sx={{ width: '100%' }}
      value={props.radiologyType}
      onChange={(event, newValue) => {
        props.setRadiologyType(newValue);
        if (newValue) {
          props.setIsRadiologyTypeRequiredEmpty(false)
        }else{
          props.setIsRadiologyTypeRequiredEmpty(true)
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Radiology Type"
          required
          error={props.isRequiredEmpty}
        />
      )}
    />
  );
}

const radiologyTypes = [
  "Fetal Development and Congenital Anomalies",
  "Second- and Third-Trimester Screening Ultrasound",
  "Equipment, Transducers, and Set-Up",
  "Central and Peripheral Nervous System",
  "Face and Neck Anomalies",
  "Lymphatic Anomalies and Hydrops",
  "Fetal Heart",
  "Thoracic Anomalies",
  "Gastrointestinal Tract",
  "Urinary Tract Anomalies",
  "Disorders of Sex Development",
  "Skeletal Dysplasias and Muscular Anomalies",
  "Syndromic Conditions",
  "Ultrasound in Fetal Infections",
  "Ultrasound in Multiple Pregnancy"
];

// const radiologyTypes = radiologyTypes1.map((item)=>{
//   return item.length > 30 ? item.substring(0, 27) + '...' : item;
// }) 

export default AutocompleteBox;
