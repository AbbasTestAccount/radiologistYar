import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Spline = () => {
    const numberOfPatients = [
        { month: "Jan", patients: 51 },
        { month: "Feb", patients: 70 },
        { month: "Mar", patients: 30 },
        { month: "Apr", patients: 22 },
        { month: "May", patients: 40 },
        { month: "Jun", patients: 33 },
        { month: "Jul", patients: 20 },
        { month: "Aug", patients: 49 },
        { month: "Sep", patients: 25 },
        { month: "Oct", patients: 34 },
        { month: "Nov", patients: 50 },
        { month: "Dec", patients: 22 }
    ];

    const averageValue = 30

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        title: {
            text: 'Age of Patients per Month',
            fontColor: "white"
        },
        axisX: {
            title: "Month",
            labelFontColor: "white",
            titleFontColor: "white",
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Number of Patients",
            includeZero: false,
            labelFontColor: "white",
            titleFontColor: "white",
            stripLines: [{
                value: averageValue,
                label: "Average"
            }]
        },
        data: [{
            type: "spline",
            showInLegend: true,
            yValueFormatString: "#",
            dataPoints: numberOfPatients.map(point => ({
                label: point.month,
                y: point.patients
            }))
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Spline;
