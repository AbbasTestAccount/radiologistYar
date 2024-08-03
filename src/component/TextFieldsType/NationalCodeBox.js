import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function NationalCodeBox(props) {


  const handleNumberChange = (event) => {
    const value = event.target.value.replace(/\s+|\t+/g, '');
    // Allow only numeric values
    if (/^\d*$/.test(value) && value.length <= 10) {
      props.setNationalCodeValue(value);
      props.setNationalCodeValueLength(value.length)
    }

  };

  return (
    <TextField
      required
      id="outlined-number"
      label="National Code"
      type="text"
      value={props.nationalCodeValue}
      onChange={handleNumberChange}
      error={props.isRequiredEmpty}
      inputProps={{
        maxLength: 10,
      }}
      sx={{
        width:'100%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: props.isRequiredEmpty ? 'red' : '',
          },
        },
      }}
    />
  );
}
