import React from "react";
// props = src, title, subtitle, isDark(Bool)
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col item-start gap-1 px-4">
        <div className="h-85">
          <img
            src={props.src}
            alt={props.title}
            className="w-full h-full rounded-lg"
          />
        </div>
        <h4
          className={`md:text-lg font-medium ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h4>
        <p
          className={`text-base font-normal ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
