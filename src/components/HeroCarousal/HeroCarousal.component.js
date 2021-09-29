import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCaroual = () => {
  const settingsLg = {
    arrows: true,
    centerPadding: "100px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://images.unsplash.com/photo-1631741777775-81363741dc73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1632166889955-bec712ad22b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1631935181538-806ec29bc470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1632059412213-ccb49c4b0d01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <>
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-64 md:h-72 py-3 focus:outline-none">
              <img
                src={image}
                alt="heroCarousalimage"
                className="w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96 px-1.5 py-3 focus:outline-none">
              <img
                src={image}
                alt="heroCarousalimage"
                className="w-full h-full rounded-md "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCaroual;
