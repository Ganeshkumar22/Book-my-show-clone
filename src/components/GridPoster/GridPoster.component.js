import React from "react";
// props = src, title, subtitle, language, price
const GridPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-1 px-3 py-5">
        <div className="h-85">
          <img
            src={props.src}
            alt={props.alt}
            className="w-full h-full rounded-lg"
          />
        </div>
        <h4 className="md:text-lg font-bold pt-4">{props.title}</h4>
        <p className="text-base font-normal">{props.subtitle}</p>
        <p className="text-base font-normal">{props.language}</p>
        <p className="text-medium font-normal">{props.price}</p>
      </div>
    </>
  );
};

export default GridPoster;
