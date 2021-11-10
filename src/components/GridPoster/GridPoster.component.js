import React from "react";
// props = src, title, language, ratings, price
const GridPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-1 px-3 py-5">
        <div className="h-85">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.alt}
            className="w-full h-full rounded-lg"
          />
        </div>
        <h4 className = "md:text-lg font-bold pt-4">{props.original_title}</h4>
        <h6 className = "text-base font-semibold text-gray-800">Watch on BookMyShow</h6>
        <p className="text-base font-semibold text-gray-800">{props.original_language} | {props.vote_average}</p>
        <p className = "text-base font-normal text-gray-800">₹ 199</p>
      </div>
    </>
  );
};

export default GridPoster;
