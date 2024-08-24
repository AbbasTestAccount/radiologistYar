import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function AutocompleteBox(props) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: '100%' }}
      value={props.type}
      onChange={(event, newValue) => {
        props.setType(newValue);
        if (newValue) {
          props.setIsTypeRequiredEmpty(false)
        }else{
          props.setIsTypeRequiredEmpty(true)
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          required
          error={props.isRequiredEmpty}
          autoComplete='no'
        />
      )}
    />
  );
}



// const radiologyTypes = radiologyTypes1.map((item)=>{
//   return item.length > 30 ? item.substring(0, 27) + '...' : item;
// }) 

export default AutocompleteBox;
