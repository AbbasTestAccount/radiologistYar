import React, { useRef, useCallback } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StackedBar100Chart = () => {
    const data = [
        {
            name: "Jan",
            color: "#9bbb59",
            monthlyData: [
                { label: "Disease A", y: 30 },
                { label: "Disease B", y: 25 },
                { label: "Disease C", y: 20 },
                { label: "Disease D", y: 35 },
                // Add more months...
            ]
        },
        {
            name: "Feb",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Mar",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Apr",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "May",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Jun",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Jul",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Aug",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Sep",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Oct",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Nov",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        },
        {
            name: "Dec",
            color: "#7f7f7f",
            monthlyData: [
                { label: "Disease A", y: 33 },
                { label: "Disease B", y: 45 },
                { label: "Disease C", y: 10 },
                { label: "Disease D", y: 36 },
                // Add more months...
            ]
        }
        // Add more diseases...
    ];
    
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
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
            reversed: true,
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        title: {
            text: "Monthly Patient Count by Disease"
        },
        toolTip: {
            shared: true
        },
        axisY: {
            suffix: " %"
        },
        axisX: {
            interval: 1,
            labelAngle: -45
        },
        data: data.map(disease => ({
            type: "stackedBar100",
            name: disease.name,
            showInLegend: true,
            color: disease.color,
            indexLabel: "{y}",
            indexLabelFontColor: "white",
            yValueFormatString: "#,###",
            dataPoints: disease.monthlyData.map(month => ({ label: month.label, y: month.y }))
        }))
    };

    return (
        <div>
            <CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
        </div>
    );
};

export default StackedBar100Chart;
