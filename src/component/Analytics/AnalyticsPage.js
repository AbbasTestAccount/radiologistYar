import PieChart from './Charts/PieChart';
import StackedBarCharts from './Charts/StackedBarChart'
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
                (chartType === 'multiSeriesCharts' ? 
                    <PieChart/> :
                (chartType === 'splineCharts' ? 
                    <PieChart /> :
                (chartType === 'boxAndWhiskerChart' ? 
                    <PieChart /> :
                (chartType === 'multiSeriesBarChart' ? 
                    <PieChart /> :
                    ''

                )))))
            }
        </div>
    );
};

export default AnalyticsPage;







