import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
    const [value, setValue] = React.useState(null);

    React.useEffect(()=>{
        if(value){
            console.log(`${value.$y} ${value.$M + 1} ${value.$D} `);
        }else{
            console.log("null value !!");
        }
    },[value])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
            <DatePicker 
                format="YYYY/MM/DD"
                label="Date of patient visit"
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </DemoContainer>
        </LocalizationProvider>
    );
}
