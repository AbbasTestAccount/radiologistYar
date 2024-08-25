import CardSlider from '../CardSlider';
import './Home.css';
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MainSlider from '../MainSlider';
import Footer from '../Footer';

function Home() {
    return (
        <div className="content-below-toolBar home">
          <MainSlider/>
          <CardSlider/>
          <Footer/>
        </div>
    );
}

export default Home;
