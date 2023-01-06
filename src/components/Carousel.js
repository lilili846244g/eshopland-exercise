import React, { useState } from "react";
import "../styles/Carousel.scss";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Data } from "./Data";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <div className="carousel-main">
      <div className="arrows">
        <HiArrowLeft
          className="left"
          onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        />
        <HiArrowRight
          className="right"
          onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
        />
      </div>

      {Data.map((slide, index) => {
        return (
          <div className={index === current ? "carousel active" : "carousel"}>
            {index === current && (
              <div key={slide.index} className="data-item">
                <div className="texts">
                  <h1 className="title">{slide.title}</h1>
                  <p>{slide.text} </p>
                </div>
                <img src={slide.photo} alt="" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
