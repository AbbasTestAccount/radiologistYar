import React, { useState, useRef, useCallback } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StackedBar100Chart = () => {
    const initialVisibility = {
        "Disease A": true,
        "Disease B": true,
        "Disease C": true,
        "Disease D": true,
        // Add more diseases...
    };

    const [visibleDiseases, setVisibleDiseases] = useState(initialVisibility);

    const data = [
        {
            name: "Jan",
            color: "#F94144",
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
            color: "#F3722C",
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
            color: "#F8961E",
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
            color: "#F9844A",
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
            color: "#F9C74F",
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
            color: "#90BE6D",
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
            color: "#43AA8B",
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
            color: "#4D908E",
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
            color: "#577590",
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
            color: "#277DA1",
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
            color: "#33658a",
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
            color: "#2f4858",
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

    const toggleDiseaseVisibility = useCallback((disease) => {
        setVisibleDiseases(prev => ({
            ...prev,
            [disease]: !prev[disease]
        }));
    }, []);

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
            reversed: false,
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
        data: data.map(month => ({
            type: "stackedBar100",
            name: month.name,
            showInLegend: true,
            color: month.color,
            indexLabel: "{y}",
            indexLabelFontColor: "white",
            yValueFormatString: "#",
            dataPoints: month.monthlyData
                .filter(disease => visibleDiseases[disease.label])
                .map(disease => ({ label: disease.label, y: disease.y }))
        }))
    };

    return (
        <div>
            <div>
                {Object.keys(initialVisibility).map(disease => (
                    <label key={disease} style={{ marginRight: '10px', color: 'white' }}>
                        <input
                            type="checkbox"
                            checked={visibleDiseases[disease]}
                            onChange={() => toggleDiseaseVisibility(disease)}
                        />
                        {disease}
                    </label>
                ))}
            </div>
            <CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
        </div>
    );
};

export default StackedBar100Chart;
