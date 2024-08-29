import PieChart from './Charts/PieChart';
import StackedBarCharts from './Charts/StackedBarChart'
import MultiSplineChart from './Charts/MultiSpline'
import Spline from './Charts/Spline'
import BoxAndWhiskerChart from './Charts/BoxAndWhiskerChart'
import MultiBarChart from './Charts/MultiBarChart'
import { useParams } from "wouter";
// import RangeChart from '../Charts/RangeChart/RangeChart';
// import './loader.css'


const AnalyticsPage = (props) => {
    const { chart } = useParams();
    const chartType = String(chart);

    setTimeout(() => {
        const toolBar = document.getElementById('toolBar')
        const toolBarHeight = toolBar.offsetHeight     

        const logsPage = document.getElementById('logs-page')
        logsPage.style.backgroundColor = 'rgb(24, 24, 24)'
        logsPage.style.height =  `calc(${window.innerHeight - toolBarHeight - 0.5}px - 10vh)`

    }, 100);
    
    

    return (
        <div id='logs-page' style={{paddingTop:"10vh"}}>
            {
                chartType === 'pieChart' ? 
                    <PieChart/> :
                (chartType === 'stackedBarCharts' ? 
                    <StackedBarCharts/> :
                (chartType === 'multiSplineChart' ? 
                    <MultiSplineChart/> :
                (chartType === 'splineCharts' ? 
                    <Spline /> :
                (chartType === 'boxAndWhiskerChart' ? 
                    <BoxAndWhiskerChart /> :
                (chartType === 'multiSeriesBarChart' ? 
                    <MultiBarChart /> :
                    ''

                )))))
            }
        </div>
    );
};

export default AnalyticsPage;







