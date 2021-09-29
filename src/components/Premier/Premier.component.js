import React from "react";
import Slider from "react-slick";

// component
import Poster from "../Poster/Poster.component";

// config
import settings from "../../Config/PosterCarousal.config";

// Images
import PremierImages from "../../Config/TempPosters.config";

const Premier = () => {
  return (
    <>
    <div className = "flex flex-col items-start py-4 px-4">
        <h3 className = "font-bold text-white text-2xl">Premieres</h3>
        <p className = "text-white text-sm font-normal">Brand new releases every Friday</p>
    </div>

      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark/>
        ))}
      </Slider>
    </>
  );
};

export default Premier;
