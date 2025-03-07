import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/FounderNetwork.css";

const founders = [
  {
    name: "Aaron Mcdonald",
    role: "CEO - Founder, Centrality, NetX",
    image: "aaron.jpg", // Replace with actual image
  },
  {
    name: "Cillian Leonowicz",
    role: "Director in Technology Consulting & Blockchain Lead, EY",
    image: "cillian.jpg",
  },
  {
    name: "Bob Wolpert",
    role: "Chief Strategy & Innovation Officer, Golden State Foods",
    image: "bob.jpg",
  },
];

const FounderNetwork = () => {
  return (
    <div className="founder-container">
      <h2>
        Unlock <span className="highlight">Exclusive</span> Access to Our{" "}
        <span className="highlight">Elite</span> Founder Network
      </h2>
      <p className="description">
        By getting accepted, you gain entry into Persist, connecting with 400+ 
        millionaire and billionaire startup leaders. Network, learn, and grow with 
        the best in the industry.
      </p>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="founder-slider"
      >
        {founders.map((founder, index) => (
          <SwiperSlide key={index} className="founder-card">
            <img src={founder.image} alt={founder.name} className="founder-img" />
            <h3>{founder.name}</h3>
            <p>{founder.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FounderNetwork;
