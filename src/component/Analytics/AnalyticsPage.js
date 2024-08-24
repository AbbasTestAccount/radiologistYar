// import Testi from '../Charts/Testi';
// import PieChart from '../Charts/PieChart';
// import DateTimeAxisStockChart from '../Charts/ChartsWithTime/StockChart with Date-Time Axis';
// import ScatterChart from '../Charts/ScatterChart'
import { useParams } from "wouter";
// import RangeChart from '../Charts/RangeChart/RangeChart';
// import './loader.css'


const AnalyticsPage = (props) => {
    const { chart } = useParams();
    const chartType = String(chart);

    // return (
    //     <div id='logs-page'>
    //         {
    //             chartType === 'pie' ? 
    //             <PieChart/> :
    //             (chartType === 'range' ? 
    //             <RangeChart/> :
    //             (chartType === 'dateTime' ? 
    //             <DateTimeAxisStockChart/> :
    //             (chartType === 'scatter' ? 
    //                 <ScatterChart /> :
    //                 <Testi />)
    //             ))
    //         }
    //     </div>
    // );
};

export default AnalyticsPage;