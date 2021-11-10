import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

// components
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCaroual = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  const settingsLg = {
    arrows: true,
    centerPadding: "150px",
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-72 py-2 focus:outline-none">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="heroCarousalimage"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCaroual;
