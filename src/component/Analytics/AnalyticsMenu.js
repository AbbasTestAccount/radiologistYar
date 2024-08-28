import './AnalyticsMenu.css';
import pieChart from '../../assets/Images/Charts/pieChart.png';
import stackedBarCharts from '../../assets/Images/Charts/stackedBarCharts.png';
import splineCharts from '../../assets/Images/Charts/splineCharts.png';
import multiSplineChart from '../../assets/Images/Charts/multiSeriesCharts.png';
import boxAndWhiskerChart from '../../assets/Images/Charts/boxAndWhiskerChart.png';
import multiSeriesBarChart from '../../assets/Images/Charts/multiSeriesBarChart.png';




const cards = [
    { title: 'Different percentage of diseases', image: pieChart , chart: '/analytics/pieChart'},
    { title: 'Number of each disease in the last 3 months', image: stackedBarCharts , chart: '/analytics/stackedBarCharts'},
    { title: 'Number of one disease in different months', image: multiSplineChart , chart: '/analytics/multiSplineChart'},
    { title: 'Age suffering of patients', image: splineCharts , chart: '/analytics/splineCharts'},
    { title: 'Age suffering of patients', image: boxAndWhiskerChart , chart: '/analytics/boxAndWhiskerChart'},
    { title: 'Gender and number of visits in each city', image: multiSeriesBarChart , chart: '/analytics/multiSeriesBarChart'},
];


const AnalyticsMenu = (props) => {
    
    return (
        <div className="card-grid-charts">
            {cards.map((card, index) => (
                <a href={card.chart} style={{color: "inherit", textDecoration: "inherit"}}>
                    <div className="card-charts" key={index}>
                        <img src={card.image} alt={card.title} className="card-image-charts" />
                        <h3 className="card-title-charts">{card.title}</h3>
                    </div>
                </a>
                
            ))}
        </div>

    );
};
  

export default AnalyticsMenu;