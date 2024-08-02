import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function RequiredBox(props) {
  const handleChange = (e) => {
    props.setRequiredValue(e.target.value);

    if (e.target.value.trim() !== '') {
      props.setIsRequiredEmpty(false);
    }

  };

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label={props.label}
        value={props.requiredValue}
        onChange={handleChange}
        error={props.isRequiredEmpty}
        sx={{
          width:'100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: props.isRequiredEmpty ? 'red' : '',
            },
          },
        }}
      />
    </div>
  );
}
