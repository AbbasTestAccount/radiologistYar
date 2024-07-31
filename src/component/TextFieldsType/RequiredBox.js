import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

export default function FormPropsTextFields(props) {
  const [numberValue, setNumberValue] = useState('');



  const handleNumberChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setNumberValue(value);
    }
  };

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        value={props.requiredValue}
        onChange={(e) => props.setRequiredValue(e.target.value)}
        error={props.isRequiredEmpty}
        helperText={props.isRequiredEmpty ? 'This field is required' : ''}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: props.isRequiredEmpty ? 'red' : '',
            },
          },
        }}
      />

      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        value={numberValue}
        onChange={handleNumberChange}
        inputProps={{
          min: 0,
          max: 100,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end" style={{ paddingLeft: '5px' }}>Years</InputAdornment>,
        }}
      />
      
    </div>
  );
}
