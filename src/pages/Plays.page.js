import axios from "axios";
import React, { useEffect, useState } from "react";
import GridPosterConfig from "../components/GridPosterConfig/GridPosterConfig.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Playspage = () => {

  // PlaysMovies
  const [playsMovies, setPlaysMovies] = useState([]);
  useEffect(() => {
    const requestPlaysMovies = async () => {
      const getPlaysMovies = await axios.get("/movie/popular");
      setPlaysMovies(getPlaysMovies.data.results);
    };
    requestPlaysMovies();
  }, []);
  console.log({ playsMovies });

  // PlaysMovies1
  const [playsMovies1, setPlaysMovies1] = useState([]);
  useEffect(() => {
    const requestPlaysMovies = async () => {
      const getPlaysMovies = await axios.get("/movie/top_rated");
      setPlaysMovies1(getPlaysMovies.data.results);
    };
    requestPlaysMovies();
  }, []);
  console.log({ playsMovies1 });

  // PlaysMovies2
  const [playsMovies2, setPlaysMovies2] = useState([]);
  useEffect(() => {
    const requestPlaysMovies = async () => {
      const getPlaysMovies = await axios.get("/movie/upcoming");
      setPlaysMovies2(getPlaysMovies.data.results);
    };
    requestPlaysMovies();
  }, []);
  console.log({ playsMovies2 });

  return (
    <>
      <div className="container lg:mx-12">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="relative lg:-left-4 lg:w-9/12">
            <h1 className="mt-10 ml-3 lg:text-2xl md:text-xl md:ml-3 font-bold text-gray-800 lg:pb-5">
              Plays In Thiruthuraipoondi
            </h1>
            <div>
              <GridPosterConfig images={playsMovies} images1={playsMovies1} images2={playsMovies2}/>
            </div>
          </div>
          <div className="lg:w-3/12 mt-10 hidden lg:block">
            <h1 className="lg:text-2xl font-bold text-gray-800 pb-5">
              Filters
            </h1>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter title="Language" tags={["English", "Tamil"]} />
              <PlaysFilter title="Categories" tags={["Theatre"]} />
              <PlaysFilter
                title="Genres"
                tags={["Drama", "Comedy", "Musical"]}
              />
              <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Outdoor Events", "Kids Allowed"]}
              />
              <PlaysFilter
                title="Price"
                tags={["Free", "0 - 500", "501 - 2000 Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playspage;
