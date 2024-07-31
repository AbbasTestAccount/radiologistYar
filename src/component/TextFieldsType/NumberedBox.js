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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
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
    </Box>
  );
}
