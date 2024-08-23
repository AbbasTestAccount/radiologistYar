import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/Images/Slides/slide1.jpg'
import slide2 from '../assets/Images/Slides/slide2.jpg'
import "./MainSlider.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
          border: "2px solid #000000a1" /* Add a border */

        }}
      />
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={slide2} alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default MainSlider;
