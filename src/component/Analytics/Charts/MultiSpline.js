import React, { useRef, useCallback } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SplineChart = () => {
    const data = [
        {
            name: "Disease A",
            dataPoints: [
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
            ]
        },
        {
            name: "Disease B",
            dataPoints: [
                { month: "Jan", patients: 20060 },
                { month: "Feb", patients: 24980 },
                { month: "Mar", patients: 38800 },
                { month: "Apr", patients: 29400 },
                { month: "May", patients: 31260 },
            ]
        }
    ]
    
    const chartRef = useRef(null);

    const toggleDataSeries = useCallback((e) => {
        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        if (chartRef.current) {
            chartRef.current.render();
        }
    }, []);

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
            reversed: false,
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        title: data.map(data=>({
            text: data.name ,
            fontColor: "white"
        })),
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
            titleFontColor: "white"
        },
        data: data.map(disease => ({
            type: "spline",
            name: disease.name,
            showInLegend: true,
            yValueFormatString: "#",
            dataPoints: disease.dataPoints.map(point => ({
                label: point.month,
                y: point.patients
            }))
        }))
    };

    return (
        <div>
            <CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
        </div>
    );
};

export default SplineChart;
