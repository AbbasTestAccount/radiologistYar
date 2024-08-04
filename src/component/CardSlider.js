// src/component/CardSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './CardSlider.css';

const people = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    description: "A software engineer with 5 years of experience."
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    description: "A project manager who loves agile methodologies."
  },
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/150",
    description: "A UX/UI designer with a passion for creating intuitive user experiences."
  },{
  name: "Abbas Shabrang",
  image: "https://via.placeholder.com/150",
  description: "Developer askasjldksalkdj lkas jflksjdl kfjlkds jflkjdskjf lkdjsjfl hdsjhf dsg agfhgsdahfhjkds k hfhd sgfjkdsjlfshiudhjknk."
    },
  // Add more people as needed
];

const CardSlider = () => {
  return (
    <div className="card-slider">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
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
            <div className="card" style={{justifyContent:'space-around'}}>
              <img src={person.image} alt={person.name} className="card-image" />
              <h3 className="card-name">{person.name}</h3>
              <p className="card-description">{person.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
