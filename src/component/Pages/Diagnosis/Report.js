import React, { forwardRef } from 'react';
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import './Report.css';

const Report = forwardRef(({ 
  firstnameValue, 
  lastnameValue, 
  nationalCodeValue, 
  ageValue, 
  visitDate, 
  radiologyType, 
  otherDescription, 
  statusOfEachCheckListItems 
}, ref) => {
  return (
    <div ref={ref} className="report">
      <h2 className='reportH2'>Patient Report</h2>
      <div className="patient-info">
        <p><strong>First Name:</strong> {firstnameValue}</p>
        <p><strong>Last Name:</strong> {lastnameValue}</p>
        <p><strong>National Code:</strong> {nationalCodeValue}</p>
        <p><strong>Age:</strong> {ageValue}</p>
        <p><strong>Visit Date:</strong> {dayjs(visitDate).format('YYYY-MM-DD')}</p>
        <p><strong>Radiology Type:</strong> {radiologyType}</p>
        <p><strong>Other Description:</strong> {otherDescription}</p>
      </div>
      <h3 className='reportH3'>Checklist Items</h3>
      <ul className='reportUl'>
        {statusOfEachCheckListItems
          .filter(item => item.checkListStatus === null || item.checkListStatus === false)
          .map((item, index) => (
            <li className='reportLi' key={index}>
              <p><strong>CheckList:</strong> {item.checkList}</p>
              <p><strong>Status:</strong> {item.checkListStatus === null ? 'not checked' : item.checkListStatus}</p>
              <p><strong>Suspicious Case:</strong> {item.SuspiciousCase ? 'Yes' : 'No'}</p>
              {item.SuspiciousCase && <p><strong>Description of Suspicious:</strong> {item.descriptionOfSuspicius}</p>}
            </li>
          ))}
      </ul>
    </div>
  );
});

function ReportComponent(props) {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Patient Report',
  });

  return (
    <div>
      <Report ref={componentRef} {...props} />
      <Button variant="contained" color="primary" onClick={handlePrint}>
        Download as PDF
      </Button>
      <br />
      <br />
    </div>
  );
}

export default ReportComponent;
