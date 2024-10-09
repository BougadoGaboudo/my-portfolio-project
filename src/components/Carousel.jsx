import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { imgCarousel } from "../data/carousel";
import PrimaryBtn from "./PrimaryBtn";

const Carousel = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            focus: "center",
            gap: "1rem",
            pagination: false,
            arrows: true,
            drag: true,
            snap: false,
          }}
        >
          {imgCarousel.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item.img} alt={`Image ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="carousel-btn">
        <PrimaryBtn link={"/gallery"} text={"More work"} />
      </div>
    </section>
  );
};

export default Carousel;
