import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function FormPropsTextFields(props) {
  const handleNumberChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      props.setAgeValue(value);
      if (value === '') {
        props.setIsAgeValueRequiredEmpty(true)
      }else{
        props.setIsAgeValueRequiredEmpty(false)

      }
    }
  };

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData('text');
    if (!/^\d+$/.test(paste)) {
      event.preventDefault();
    }
  };

  return (
    <TextField
      id="outlined-number"
      label="Age"
      type="text"
      value={props.ageValue}
      onChange={handleNumberChange}
      onPaste={handlePaste}
      error={props.isRequiredEmpty}
      inputProps={{
        min: 0,
        max: 100,
      }}
      InputProps={{
        endAdornment: <InputAdornment position="end" style={{ paddingLeft: '5px' }}>Years</InputAdornment>,
      }}
      sx={{
        width: '100%',
      }}
    />
  );
}
