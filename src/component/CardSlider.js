// src/component/CardSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './CardSlider.css';
import doctor1 from '../assets/Images/Doctors/Abdol Rasoul Sedaghat.jpg'
import doctor2 from '../assets/Images/Doctors/Amir Reza Radmard.jpg'
import doctor3 from '../assets/Images/Doctors/Morteza Sanei Tahery.jpg'
import doctor4 from '../assets/Images/Doctors/Reza Gerami.jpg'

const people = [
  {
    name: "Abdol Rasoul Sedaghat",
    image: doctor1,
    description: "Dr. Abdol Rasoul Sedaghat specializes in MRI"
  },
  {
    name: "Amir Reza Radmard",
    image: doctor2,
    description: "Dr. Amir Reza Radmard in CT scans"
  },
  {
    name: "Morteza Sanei Tahery",
    image: doctor3,
    description: "Dr. Morteza Sanei Tahery in ultrasound"
  },{
  name: "Reza Gerami",
  image: doctor4,
  description: "Dr. Reza Gerami in interventional radiology."
    },
];

const CardSlider = () => {
  return (
    <div className="card-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
            delay: 10000,
            disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {people.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="card-image-container">
                
                <img src={person.image} alt={person.name} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-name">{person.name}</h3>
                <p className="card-description">{person.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
