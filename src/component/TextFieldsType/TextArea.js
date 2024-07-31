import * as React from 'react';
import { styled } from '@mui/system';

const StyledTextarea = styled('textarea')(
  ({ theme }) => `
  box-sizing: border-box;
  width: 80%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? '#9DA8B7' : '#1C2025'};
  background: ${theme.palette.mode === 'dark' ? '#1C2025' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#6B7A90' : '#E5EAF2'};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? '#1C2025' : '#F3F6F9'};
  resize: none; // Disable resizing by the user

  &:hover {
    border-color: #3399FF;
  }

  &:focus {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#0072E5' : '#b6daff'};
  }

  // Firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function Textarea() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value); // Updated to log the current value
  };

  return (
    <StyledTextarea
      placeholder="Other descriptions..."
      value={value}
      onChange={handleChange}
      rows={3} // Set a fixed number of rows
    />
  );
}
