import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './requiredChartCss.css';
// import { useLocation } from 'wouter';
// import IOSSwitch from '../ToggleSwitch'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = (props) => {

//   const [, setLocation] = useLocation();

//   const handleClick = (e) => {
//     switch (e.dataPoint.label) {
//       case 'Failed':
//         setLocation('/failed');
//         break;
      
//       case 'Passed':
//         setLocation('/passed');
//         break;
      
//       case 'Reject':
//         setLocation('/Reject');
//         break;

//       // TODO: add detail choice
 
//       default:
//         break;
//     }
//   }
  
  const LinkedCallLength = 10
  const LinkedFailedCallLength = 12
  const LinkedRejectCallLength = 3


  const allCalls = LinkedFailedCallLength+LinkedCallLength+LinkedRejectCallLength
  const failedPercent = (LinkedFailedCallLength / allCalls) * 100
  const passedPercent = (LinkedCallLength / allCalls) * 100
  const rejectPercent = (LinkedRejectCallLength / allCalls) * 100


  let height = window.innerHeight;
  const options = {
    theme: "dark2",
    animationEnabled: false,
    exportFileName: "Pie chart of Calls Status",
    exportEnabled: true,
    animationEnabled:true,
    animationDuration:600,
    title: {
        text: "Calls Status"
    },
    height: height / 2,
    backgroundColor: 'rgb(24, 24, 24)',
    data: [{
      type: "pie",
      explodeOnClick: false,
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: failedPercent, label: "Failed", color: "#e60000" },
        { y: passedPercent, label: "Passed", color: "#04cc15" },
        { y: rejectPercent, label: "Reject", color: "#e88f2c" }
      ]
    }]
  }

  return (
    <div>
      {/* <IOSSwitch clicked={true} rLabel="Merge all data" lLabel="Show all details" /> */}
      <CanvasJSChart options={options} />
    </div>
  );
}

export default PieChart;
