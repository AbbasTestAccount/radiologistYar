import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function AutocompleteBox() {
  const [radiologyType, setRadiologyType] = useState(null);
  const [isError, setIsError] = useState(false);

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={radiologyTypes}
        sx={{ width: 300 }}
        value={radiologyType}
        onChange={(event, newValue) => {
          setRadiologyType(newValue);
          setIsError(!newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Radiology Type"
            required
            error={isError}
            helperText={isError ? 'This field is required' : ''}
          />
        )}
      />
    </Box>
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
