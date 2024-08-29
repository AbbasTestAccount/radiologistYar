import React, { useState, useRef, useCallback } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Chip from '@mui/material/Chip';
import './requiredChartCss.css'

const { CanvasJSChart } = CanvasJSReact;

const data = [
    { disease: "Disease A", male: 10000, female: 12000 },
    { disease: "Disease B", male: 9000, female: 9500 },
    { disease: "Disease C", male: 7000, female: 7500 },
    { disease: "Disease D", male: 5000, female: 5500 },
    { disease: "Disease E", male: 3000, female: 3500 }
];

const MultiBarChart = () => {
    const chartRef = useRef(null);

    // Generate initial visibility based on data
    const generateInitialVisibility = () => {
        const visibility = {};
        data.forEach(d => {
            visibility[d.disease] = true;  // Initially, all diseases are visible
        });
        return visibility;
    };

    const [visibleDiseases, setVisibleDiseases] = useState(generateInitialVisibility());

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

    // Handle chip clicks to toggle disease visibility
    const chipClicked = (event, diseaseName) => {
        setVisibleDiseases(prevVisibility => ({
            ...prevVisibility,
            [diseaseName]: !prevVisibility[diseaseName]
        }));
    };

    // Generate data series based on the visibleDiseases state
    const generateDataSeries = () => {
        const maleData = data.filter(disease => visibleDiseases[disease.disease])
            .map(disease => ({ y: disease.male, label: disease.disease, title: 'male' }));

        const femaleData = data.filter(disease => visibleDiseases[disease.disease])
            .map(disease => ({ y: disease.female, label: disease.disease, title: 'female' }));

        return [
            {
                type: "bar",
                name: "Male",
                toolTipContent: "{title}<br/><b>{label}</b> : {y}",
                showInLegend: true,
                dataPoints: maleData,
                color: '#696eff'
            },
            {
                type: "bar",
                name: "Female",
                toolTipContent: "{title}<br/><b>{label}</b> : {y}",
                showInLegend: true,
                dataPoints: femaleData,
                color: '#f8acff'
            }
        ];
    };

    const options = {
        backgroundColor: 'rgb(24, 24, 24)',
        theme: "dark2",
        animationEnabled: true,
        title: {
            text: "Gender and number of visits for each disease"
        },
        axisX: {
            title: "Disease",
            reversed: true,
        },
        axisY: {
            title: "Number of Patients"
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        data: generateDataSeries()
    };

    return (
        <div>
            <CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
            <div className="chips-in-a-row" style={{marginTop: '2.5vh'}}>
                {data.map(disease => (
                    <Chip
                        key={disease.disease}
                        label={disease.disease}
                        className={visibleDiseases[disease.disease] ? "active-chip" : "chip-mode-slector"}
                        clickable
                        onClick={(event) => chipClicked(event, disease.disease)}
                        style={{ margin: '5px' }}
                    />

                ))}
            </div>
        </div>
    );
};

export default MultiBarChart;
