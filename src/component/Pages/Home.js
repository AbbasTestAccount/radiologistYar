import CardSlider from '../CardSlider';
import './Home.css';
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
    return (
        <div className="content-below-toolBar home">
          <CardSlider/>
        </div>
    );
}

export default Home;
