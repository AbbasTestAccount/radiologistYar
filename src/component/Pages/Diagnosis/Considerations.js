import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { description: 'I still see clearly with my contacts', expresscom: true, doctorsOffice: true },
  { description: 'My prescription is expired', expresscom: true, doctorsOffice: true },
  { description: 'I may want to try other contacts', expresscom: true, doctorsOffice: true },
  { description: 'I want a doctor-issued prescription', expresscom: false, doctorsOffice: true },
  { description: 'I have glaucoma or other eye health concerns', expresscom: false, doctorsOffice: true },
  { description: 'I want to renew my prescription online', expresscom: true, doctorsOffice: false },
];

const MyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Express.com</TableCell>
            <TableCell>Doctor's office</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                {row.expresscom ? <Checkbox checked={true} /> : <Checkbox checked={false} />}
              </TableCell>
              <TableCell>
                {row.doctorsOffice ? <Checkbox checked={true} /> : <Checkbox checked={false} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
