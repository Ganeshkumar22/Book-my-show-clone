import React from "react";
import GridPoster from "../GridPoster/GridPoster.component";
import settings from "../../Config/GridPoster.config";
import Slider from "react-slick";

const GridPosterConfig = (props) => {
  return (
    <>
      <Slider {...settings} arrows = {false}> 
        {props.images.map((image) => (
          <GridPoster {...image} />
        ))}
      </Slider>

      <Slider {...settings} arrows = {false}> 
        {props.images.map((image) => (
          <GridPoster {...image} />
        ))}
      </Slider>
    </>
  );
};

export default GridPosterConfig;
