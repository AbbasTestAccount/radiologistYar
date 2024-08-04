import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Checkbox } from '@mui/material';
import { ArrowBack, Cancel } from '@mui/icons-material';
import Textarea from '../../TextFieldsType/TextArea'; // Import your updated Textarea component

const Considerations = (props) => {
  const { setActiveStep, statusOfEachCheckListItems, setStatusOfEachCheckListItems } = props;

  const onBack = () => {
    setActiveStep(1);
  };

  const handleSuspiciousCaseChange = (id) => {
    const updatedItems = statusOfEachCheckListItems.map(item => {
      if (item.checkList === id) {
        return { ...item, SuspiciousCase: !item.SuspiciousCase };
      }
      return item;
    });
    setStatusOfEachCheckListItems(updatedItems);
  };

  const handleDescriptionChange = (id, newValue) => {
    const updatedItems = statusOfEachCheckListItems.map(item => {
      if (item.checkList === id) {
        return { ...item, descriptionOfSuspicius: newValue };
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
                  <TableRow key={row.checkList}>
                    <TableCell align="center">{row.checkList}</TableCell>
                    <TableCell align="center">
                      {row.checkListStatus === false ? <Cancel style={{ color: 'red' }} /> : ''}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={row.SuspiciousCase ?? false} // Default to false if SuspiciousCase is undefined
                        onChange={() => handleSuspiciousCaseChange(row.checkList)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ marginTop: '20px' }}>
        {statusOfEachCheckListItems.map(item => (
          item.SuspiciousCase && (
            <Box key={item.checkList} sx={{ marginBottom: '20px' }}>
              <Typography variant="subtitle1" gutterBottom>
                Description for: {item.checkList}
              </Typography>
              <Textarea
                placeholder={item.checkList}
                description={item.descriptionOfSuspicius}
                setDescription={(newValue) => handleDescriptionChange(item.checkList, newValue)}
              />
            </Box>
          )
        ))}
      </Box>
    </Box>
  );
};

export default Considerations;
