import './AnalyticsMenu.css';
import pieChart from '../../assets/Images/Charts/pieChart.png';
import stackedBarCharts from '../../assets/Images/Charts/stackedBarCharts.png';
import splineCharts from '../../assets/Images/Charts/splineCharts.png';
import multiSeriesCharts from '../../assets/Images/Charts/multiSeriesCharts.png';
import boxAndWhiskerChart from '../../assets/Images/Charts/boxAndWhiskerChart.png';
import multiSeriesBarChart from '../../assets/Images/Charts/multiSeriesBarChart.png';




const cards = [
    { title: 'Different percentage of diseases', image: pieChart },
    { title: 'Number of each disease in the last 3 months', image: stackedBarCharts },
    { title: 'Number of one disease in different months', image: multiSeriesCharts },
    { title: 'Age suffering of patients', image: splineCharts },
    { title: 'Age suffering of patients', image: boxAndWhiskerChart },
    { title: 'Gender and number of visits in each city', image: multiSeriesBarChart },
];


const AnalyticsMenu = (props) => {
    
    return (
        <div className="card-grid-charts">
            {cards.map((card, index) => (
                <div className="card-charts" key={index}>
                    <img src={card.image} alt={card.title} className="card-image-charts" />
                    <h3 className="card-title-charts">{card.title}</h3>
                </div>
            ))}
        </div>

    );
};
  

export default AnalyticsMenu;