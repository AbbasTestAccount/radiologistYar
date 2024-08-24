import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ReadOnlyBox() {
  return (
    <div>
        <TextField
          id="outlined-read-only-input"
          label="Doctor's Name"
          sx={{ width: '100%' }}
          defaultValue="Abbas Shabrang" //todo: get doctors name from cookies
          InputProps={{
            readOnly: true,
          }}
        />
    </div>
  );
}
