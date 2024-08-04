import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Checkbox } from '@mui/material';
import { ArrowBack, Cancel } from '@mui/icons-material';

const Considerations = (props) => {
  const { setActiveStep, statusOfEachCheckListItems, setStatusOfEachCheckListItems } = props;

  const onBack = () => {
    setActiveStep(1);
  };

  const handleSuspiciousCaseChange = (filteredIndex) => {
    const updatedItems = statusOfEachCheckListItems.map((item, idx) => {
      if (statusOfEachCheckListItems.filter(row => row.checkListStatus !== true)[filteredIndex] === item) {
        return { ...item, SuspiciousCase: !item.SuspiciousCase };
      }
      return item;
    });
    setStatusOfEachCheckListItems(updatedItems);
  };

  const filteredItems = statusOfEachCheckListItems.filter(row => row.checkListStatus !== true);

  return (
    <Box sx={{ padding: '20px' }}>
      <Box display="flex" alignItems="center" marginBottom="50px">
        <IconButton style={{ background: '#04AA6D', marginLeft: '10px' }} edge="start" aria-label="back" onClick={onBack}>
          <ArrowBack style={{ color: 'white', fontSize: '35px' }} />
        </IconButton>
        <Typography variant="h4" gutterBottom align="center" style={{ flexGrow: 1, paddingTop: "8px" }}>
          Considerations
        </Typography>
      </Box>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '15px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">CheckList</TableCell>
                <TableCell align="center">CheckList Status</TableCell>
                <TableCell align="center">Suspicious Case</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.length === 0 ? (
                <TableRow key={0}>
                  <TableCell colSpan={3} align="center">
                    There is no data!
                  </TableCell>
                </TableRow>
              ) : (
                filteredItems.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.checkList}</TableCell>
                    <TableCell align="center">
                      {row.checkListStatus === false ? <Cancel style={{ color: 'red' }} /> : ''}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={row.SuspiciousCase}
                        onChange={() => handleSuspiciousCaseChange(index)}
                      />
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
