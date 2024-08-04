import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const data = [
  { description: 'I still see clearly with my contacts', expresscom: true, doctorsOffice: true },
  { description: 'My prescription is expired', expresscom: true, doctorsOffice: true },
  { description: 'I may want to try other contacts', expresscom: true, doctorsOffice: true },
  { description: 'I want a doctor-issued prescription', expresscom: false, doctorsOffice: true },
  { description: 'I have glaucoma or other eye health concerns', expresscom: false, doctorsOffice: true },
  { description: 'I want to renew my prescription online', expresscom: true, doctorsOffice: false },
];

const Considerations = (props) => {

  const onBack = () => {
    props.setActiveStep(1);
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Box display="flex" alignItems="center" marginBottom="50px">
        <IconButton style={{background: '#04AA6D', marginLeft: '10px'}} edge="start" aria-label="back" onClick={onBack}>
          <ArrowBack style={{ color: 'white', fontSize: '35px' }}/>
        </IconButton>
        <Typography variant="h4" gutterBottom align="center" style={{ flexGrow: 1 , paddingTop:"8px"}}>
            Considerations
        </Typography>
      </Box>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '15px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Express.com</TableCell>
                <TableCell>Doctor's office</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? (
                <TableRow key={0}>
                  <TableCell colSpan={3} align="center">
                    There is no data!
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <Checkbox checked={row.expresscom} />
                    </TableCell>
                    <TableCell>
                      <Checkbox checked={row.doctorsOffice} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Considerations;
