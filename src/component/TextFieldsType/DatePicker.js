import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
            <DatePicker 
                format="YYYY/MM/DD"
                label="Date of patient visit"
                value={props.visitDate}
                onChange={(newValue) => props.setVisitDate(newValue)}
                sx={{
                    width:'100%',
                }}
            />
        </DemoContainer>
        </LocalizationProvider>
    );
}
