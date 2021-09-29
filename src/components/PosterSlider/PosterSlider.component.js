import React from "react";

import Poster from "../Poster/Poster.component";
import Slider from "react-slick";
import settings from "../../Config/PosterCarousal.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start py-2 px-4">
        <h4
          className={`font-bold lg:text-2xl md:text-xl ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h4>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
