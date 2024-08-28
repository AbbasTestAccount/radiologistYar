import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BoxAndWhiskerChart = () => {
    const [selectedDisease, setSelectedDisease] = useState("Disease A")

    const diseaseData = [
        {
          name: "Disease A",
          monthlyData: [
            { month: "January", minAge: 45, avgAge: 60, maxAge: 75 },
            { month: "February", minAge: 50, avgAge: 65, maxAge: 80 },
            { month: "March", minAge: 47, avgAge: 62, maxAge: 77 },
            // Add more months as needed
          ]
        },
        {
          name: "Disease B",
          monthlyData: [
            { month: "January", minAge: 30, avgAge: 50, maxAge: 70 },
            { month: "February", minAge: 35, avgAge: 55, maxAge: 75 },
            { month: "March", minAge: 40, avgAge: 60, maxAge: 80 },
            // Add more months as needed
          ]
        },
        // Add more diseases as needed
      ];

    const diseaseInfo = diseaseData.find(disease => disease.name === selectedDisease);

    const options = {
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        animationEnabled: true,
        title: {
        text: `Age Distribution of Patients with ${selectedDisease}`
        },
        axisY: {
        title: "Age",
        includeZero: false
        },
        data: [{
            upperBoxColor:'#219ebc',
            lowerBoxColor:'#219ebc',
            color:'#023047',
            type: "boxAndWhisker",
            yValueFormatString: "#,##0.# \"years\"",
            toolTipContent: "{label}<br><b>Min :</b> {y[0]}<br><b>AVG :</b> {y[4]}<br><b>Max :</b> {y[2]}",
            dataPoints: diseaseInfo.monthlyData.map(monthData => ({
                label: monthData.month,
                y: [monthData.minAge, monthData.minAge, monthData.maxAge, monthData.maxAge, monthData.avgAge]
            }))
        }]
    };

    return (
        <div>
        <CanvasJSChart options={options} />
        </div>
    );
};

export default BoxAndWhiskerChart;