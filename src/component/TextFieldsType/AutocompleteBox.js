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
  "Face and Neck",
  "Lymphatic",
  "Fetal Heart",
  "Gastrointestinal Tract",
  "Urinary Tract",
  "Skeletal Dysplasias and Muscular"
];

export default AutocompleteBox;
