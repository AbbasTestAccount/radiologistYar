import React, { useState, useEffect } from 'react';
import { CheckCircle, Cancel, ArrowBack  } from '@mui/icons-material';
import { Container, Typography, Paper, IconButton, Button, Box } from '@mui/material';

const Checklist = (props) => {
  const items = props.items
  const radiologyType = props.radiologyType
  const setActiveStep = props.setActiveStep
  const statusOfEachCheckListItems = props.statusOfEachCheckListItems
  const setStatusOfEachCheckListItems = props.setStatusOfEachCheckListItems



  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedStatus = [...statusOfEachCheckListItems];
    if (statusOfEachCheckListItems[index] === newStatus) {
      updatedStatus[index] = null;
    } else {
      updatedStatus[index] = newStatus;
    }
    setStatusOfEachCheckListItems(updatedStatus);
  };

  // const logStatus = () => {
  //   items.forEach((item, index) => {
  //     const key = Object.keys(item).find(k => k.startsWith('cl'));
  //     const checkKey = Object.keys(item).find(k => k.endsWith('Check'));
  //     console.log(`${key}: ${item[key]}, ${checkKey}: ${statusOfEachCheckListItems[index]}`);
  //   });
  // };

  const truncateLabel = (label) => {
    if (browserWidth < 600){
      return label.length > 30 ? label.substring(0, 30) + '...' : label;
    } else if (browserWidth < 800) {
      return label.length > 50 ? label.substring(0, 50) + '...' : label;
    } else if (browserWidth < 1100) {
      return label.length > 80 ? label.substring(0, 80) + '...' : label;
    } 
    else {
      return label;
    }
  };

  const onBack = ()=>{
    setActiveStep(0)
  }
  
  const submitButton = ()=>{
    setActiveStep(2)
  }
  return (
    <Container>
      <Box display="flex" alignItems="center" marginBottom="50px">
        <IconButton style={{background: '#04AA6D'}} edge="start" aria-label="back" onClick={onBack}>
          <ArrowBack style={{ color: 'white', fontSize: '35px' }}/>
        </IconButton>
        <Typography variant="h4" gutterBottom align="center" style={{ flexGrow: 1 , paddingTop:"8px"}}>
          {radiologyType}
        </Typography>
      </Box>
      {/* <Button variant="contained" color="primary" onClick={logStatus} style={{ marginBottom: '20px' }}>
        Log Checklist Status
      </Button> */}
      {items.map((item, index) => {
        const key = Object.keys(item).find(k => k.startsWith('cl'));
        const label = truncateLabel(item[key]);

        return (
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '15px' }} key={index}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">{label}</Typography>
              <Box>
              <IconButton
                edge="end"
                aria-label="ok"
                onClick={() => handleStatusChange(index, true)}
                style={{ height: '50px', width: '50px', padding: '0' }} // Adjust size here
              >
                <CheckCircle style={{ color: statusOfEachCheckListItems[index] === true ? 'green' : 'grey', fontSize: '35px' }} />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="not-ok"
                onClick={() => handleStatusChange(index, false)}
                style={{ height: '50px', width: '50px', padding: '0' }} // Adjust size here
              >
                <Cancel style={{ color: statusOfEachCheckListItems[index] === false ? 'red' : 'grey', fontSize: '35px' }} />
              </IconButton>
              </Box>
            </Box>
          </Paper>
        );
      })}
      <button id='submitBtn' type="submit" onClick={submitButton}>Submit</button>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Checklist;
