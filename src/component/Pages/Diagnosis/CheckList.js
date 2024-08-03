import React, { useState, useEffect } from 'react';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { Container, Typography, Paper, IconButton, Button, Box } from '@mui/material';

const Checklist = ({ items, radiologyType }) => {
  const initialStatus = items.map(item => {
    const key = Object.keys(item).find(k => k.endsWith('Check'));
    return item[key];
  });

  const [status, setStatus] = useState(initialStatus);
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
    const updatedStatus = [...status];
    if (status[index] === newStatus) {
      updatedStatus[index] = null;
    } else {
      updatedStatus[index] = newStatus;
    }
    setStatus(updatedStatus);
  };

  const logStatus = () => {
    items.forEach((item, index) => {
      const key = Object.keys(item).find(k => k.startsWith('cl'));
      const checkKey = Object.keys(item).find(k => k.endsWith('Check'));
      console.log(`${key}: ${item[key]}, ${checkKey}: ${status[index]}`);
    });
  };

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
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">{radiologyType}</Typography>
      <Button variant="contained" color="primary" onClick={logStatus} style={{ marginBottom: '20px' }}>
        Log Checklist Status
      </Button>
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
                <CheckCircle style={{ color: status[index] === true ? 'green' : 'grey', fontSize: '35px' }} />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="not-ok"
                onClick={() => handleStatusChange(index, false)}
                style={{ height: '50px', width: '50px', padding: '0' }} // Adjust size here
              >
                <Cancel style={{ color: status[index] === false ? 'red' : 'grey', fontSize: '35px' }} />
              </IconButton>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Container>
  );
};

export default Checklist;
