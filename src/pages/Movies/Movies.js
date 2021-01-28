import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import movies from "./moviesArray";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Movies.css";

function Movies() {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="container-movies">
      <div className="container-slider">
        <Slider {...settings}>
          {movies.map((img, index) => (
            <div
              className={index === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img key={index} src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Movies;
