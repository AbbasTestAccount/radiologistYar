import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import './requiredChartCss.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);
  const [name3, setName3] = useState(null);
  
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/diag/getTop3');
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          switch (i) {
            case 0:
              setResult1(data[0].countOfPatient);
              setName1(data[0].radiologyType);
              break;
          
            case 1:
              setResult2(data[1].countOfPatient);
              setName2(data[1].radiologyType);
              break;

            case 2:
              setResult3(data[2].countOfPatient);
              setName3(data[2].radiologyType);              
              break;

            default:
              break;
          }
            
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate the percentage for the chart
  const totalCalls = (result1 || 0) + (result2 || 0) + (result3 || 0);
  const disease1Percent = ((result1 || 0) / totalCalls) * 100;
  const disease2Percent = ((result2 || 0) / totalCalls) * 100;
  const disease3Percent = ((result3 || 0) / totalCalls) * 100;

  let height = window.innerHeight;
  const options = {
    theme: "dark2",
    exportFileName: "Pie chart of Number of Diseases",
    exportEnabled: true,
    animationEnabled: true,
    animationDuration: 600,
    title: {
      text: "Number of Diseases"
    },
    height: height / 2,
    backgroundColor: 'rgb(24, 24, 24)',
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{count}</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: disease1Percent, label: name1, color: "#e60000", count: result1 },
        { y: disease2Percent, label: name2, color: "#04cc15", count: result2 },
        { y: disease3Percent, label: name3, color: "#e88f2c", count: result3 }
      ]
    }]
  };

  return (
    <div>
      {loading ? ( // Display loading message while data is being fetched
        <div>Loading...</div>
      ) : error ? ( // Display error if something goes wrong
        <div>{error}</div>
      ) : (
        <CanvasJSChart options={options} />
      )}
    </div>
  );
};

export default PieChart;
