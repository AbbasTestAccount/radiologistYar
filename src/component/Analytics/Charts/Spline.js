import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Spline = () => {
    const numberOfPatients = [
        { month: "Jan", patients: 25060 },
        { month: "Feb", patients: 27980 },
        { month: "Mar", patients: 42800 },
        { month: "Apr", patients: 32400 },
        { month: "May", patients: 35260 },
        { month: "Jun", patients: 33900 },
        { month: "Jul", patients: 40000 },
        { month: "Aug", patients: 52500 },
        { month: "Sep", patients: 32300 },
        { month: "Oct", patients: 42000 },
        { month: "Nov", patients: 37160 },
        { month: "Dec", patients: 38400 }
    ];

    const averageValue = 36500

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        title: {
            text: 'Number of Patients per Month',
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
