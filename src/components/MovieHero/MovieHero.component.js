import React from "react";

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="px-3">
          <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="MovieImage"
            className="rounded-lg "
          />
        </div>
      </div>

      <div className="hidden md:block lg:hidden px-4">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="MovieImage"
          className="rounded-lg"
        />
      </div>

      <div className="relative hidden lg:block" style = {{height: "33rem"}}>
          <div className = "absolute w-full h-full z" 
          style = {{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%"}} />
        <div className = "absolute z-30 w-1/5 h-5/6 left-16 top-10">
          <img 
          src = "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt = "ImageCard"
          className = "h-full w-full rounded-2xl"
          />
        </div>
        
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="MovieImage"
          className=" w-full h-full" 
        />
      </div>
    </>
  );
};

export default MovieHero;
