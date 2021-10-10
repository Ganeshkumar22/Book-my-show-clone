import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
const MoviePage = () => {
  return (
    <>
      <MovieHero />
      <div className="my-10 mx-auto container px-4 ">
        <div className="flex flex-col items-start gap-4 lg:w-4/5 lg:ml-30">
          <h2 className="text-gray-900 font-bold text-2xl">About the movie</h2>
          <p>
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as
            Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization.
            The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.
          </p>
        </div>
        <div className="my-8 ">
          <hr />
        </div>

        <div>
          <h2 className="text-gray-900 font-bold text-2xl pb-3.5">
            Applicable offers
          </h2>
          <div className="flex flex-row items-start px-4 gap-3 py-1 lg:w-1/3 bg-yellow-100 border-dashed border-2 border-yellow-300 rounded-md">
            <img
              src="data:image/jpeg;base64,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"
              alt="MyIcon"
              className="w-6 h-6 relative mt-1.5"
            />
            <div className="flex flex-col items-start">
              <h5 className="font-medium text-tiny">Flimy Pass</h5>
              <p className="text-gray-700 text-sm pb-2">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </p>
            </div>
          </div>
        </div>
        <div className = "my-8">
            <hr />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
