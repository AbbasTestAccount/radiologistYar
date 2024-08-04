import React, { useState, useEffect } from 'react';
import { CheckCircle, Cancel, ArrowBack } from '@mui/icons-material';
import { Container, Typography, Paper, IconButton, Box, Button } from '@mui/material';

const Checklist = (props) => {
  const { items = [], radiologyType, setActiveStep, statusOfEachCheckListItems, setStatusOfEachCheckListItems } = props;

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
    const updatedItems = [...statusOfEachCheckListItems];
    if (updatedItems[index].checkListStatus === newStatus) {
      updatedItems[index].checkListStatus = null;
    } else {
      updatedItems[index].checkListStatus = newStatus;
    }
    setStatusOfEachCheckListItems(updatedItems);
  };

  const truncateLabel = (label) => {
    if (browserWidth < 600) {
      return label.length > 30 ? label.substring(0, 30) + '...' : label;
    } else if (browserWidth < 800) {
      return label.length > 50 ? label.substring(0, 50) + '...' : label;
    } else if (browserWidth < 1100) {
      return label.length > 80 ? label.substring(0, 80) + '...' : label;
    } else {
      return label;
    }
  };

  const onBack = () => {
    setActiveStep(0);
  };

  const submitButton = () => {
    setActiveStep(2);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" marginBottom="50px">
        <IconButton style={{ background: '#04AA6D' }} edge="start" aria-label="back" onClick={onBack}>
          <ArrowBack style={{ color: 'white', fontSize: '35px' }} />
        </IconButton>
        <Typography variant="h4" gutterBottom align="center" style={{ flexGrow: 1, paddingTop: "8px" }}>
          {radiologyType}
        </Typography>
      </Box>
      {items.length > 0 ? (
        items.map((item, index) => (
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '15px' }} key={index}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">{truncateLabel(item.checkList)}</Typography>
              <Box>
                <IconButton
                  edge="end"
                  aria-label="ok"
                  onClick={() => handleStatusChange(index, true)}
                  style={{ height: '50px', width: '50px', padding: '0' }}
                >
                  <CheckCircle style={{ color: item.checkListStatus === true ? 'green' : 'grey', fontSize: '35px' }} />
                </IconButton>

                <IconButton
                  edge="end"
                  aria-label="not-ok"
                  onClick={() => handleStatusChange(index, false)}
                  style={{ height: '50px', width: '50px', padding: '0' }}
                >
                  <Cancel style={{ color: item.checkListStatus === false ? 'red' : 'grey', fontSize: '35px' }} />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        ))
      ) : (
        <Typography variant="body1">No items available</Typography>
      )}
        <button id='submitBtn' type="submit" onClick={submitButton}>Submit</button>
        <br></br>
        <br></br>
    </Container>
  );
};

export default Checklist;
