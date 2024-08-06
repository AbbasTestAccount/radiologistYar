import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Checkbox } from '@mui/material';
import { ArrowBack, Cancel } from '@mui/icons-material';
import Textarea from '../../TextFieldsType/TextArea'; // Import your updated Textarea component
import ContextMenu from '../../TextAreaContextMenu'; // Import the ContextMenu component

const Considerations = (props) => {
  const { setActiveStep, statusOfEachCheckListItems, setStatusOfEachCheckListItems } = props;
  const [contextMenu, setContextMenu] = useState(null);
  const [currentCheckList, setCurrentCheckList] = useState(null);

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

  const handleContextMenu = (event, checkList) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + window.scrollX,
            mouseY: event.clientY + window.scrollY,
          }
        : null,
    );
    setCurrentCheckList(checkList);
  };

  const handleClose = () => {
    setContextMenu(null);
    setCurrentCheckList(null);
  };

  const handleInsertText = (text) => {
    const updatedItems = statusOfEachCheckListItems.map(item => {
      if (item.checkList === currentCheckList) {
        const newText = item.descriptionOfSuspicius ? `${item.descriptionOfSuspicius} ${text}` : text;
        return { ...item, descriptionOfSuspicius: newText };
      }
      return item;
    });
    setStatusOfEachCheckListItems(updatedItems);
    handleClose();
  };

  const filteredItems = statusOfEachCheckListItems.filter(row => row.checkListStatus !== true);

  const getMenuItems = () => {
    const currentItem = statusOfEachCheckListItems.find(item => item.checkList === currentCheckList);
    const description = currentItem?.descriptionOfSuspicius || '';

    const menuItems = [];
    if (!description.includes("I think patient need to have a MRI on this part of body.")) {
      menuItems.push({ label: 'MRI', onClick: () => handleInsertText("I think patient need to have a MRI on this part of body.") });
    }
    if (!description.includes("I think patient need to have a Sonography on this part of body.")) {
      menuItems.push({ label: 'Sonography', onClick: () => handleInsertText("I think patient need to have a Sonography on this part of body.") });
    }
    return menuItems;
  };

  const submitButton = () => {
    setActiveStep(3);
  };

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
            <Box key={item.checkList} sx={{ marginBottom: '20px' }} onContextMenu={(event) => handleContextMenu(event, item.checkList)}>
              <Typography variant="subtitle1" gutterBottom>
                {item.checkList}:
              </Typography>
              <Textarea
                placeholder={"Description for " + item.checkList + " : "}
                description={item.descriptionOfSuspicius}
                setDescription={(newValue) => handleDescriptionChange(item.checkList, newValue)}
              />
            </Box>
          )
        ))}
        <ContextMenu
          contextMenu={contextMenu}
          handleClose={handleClose}
          menuItems={getMenuItems()}
        />
      </Box>
      <button id='submitBtn' type="submit" onClick={submitButton}>Submit</button>
      <br></br>
      <br></br>
    </Box>
  );
};

export default Considerations;
