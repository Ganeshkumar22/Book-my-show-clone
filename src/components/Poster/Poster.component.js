import React from "react";
// props = src, title, subtitle, isDark(Bool)
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-1 px-4">
        <div className="h-85">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          <h4
            className={`md:text-lg font-medium ${
              props.isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {props.title}
          </h4>
          <p
            className={`text-base font-medium ${
              props.isDark ? "text-white" : "text-gray-800"
            }`}
          >
             {props.original_language} |  {props.vote_average}
          </p>
        </div>
      </div>
    </>
  );
};

export default Poster;
