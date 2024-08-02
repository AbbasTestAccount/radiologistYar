import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

export default function NationalCodeBox(props) {
  const [numberValue, setNumberValue] = useState('');

  const handleNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numeric values
    if (/^\d*$/.test(value) && value.length <= 10) {
      setNumberValue(value);
    }
  };

  return (
    <TextField
      id="outlined-number"
      label="10-Digit Number"
      type="text" // Using text type to allow control over the input
      value={numberValue}
      onChange={handleNumberChange}
      inputProps={{
        maxLength: 10, // Enforce 10 digits in the input
      }}
      InputProps={{
        endAdornment: <InputAdornment position="end">Digits</InputAdornment>,
      }}
      sx={{
        width: '100%'
      }}
    />
  );
}
