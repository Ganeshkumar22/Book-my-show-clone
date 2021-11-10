import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  const [homePageMovies, setHomePageMovies] = useState([]);
  useEffect(() => {
    const requestHomePageMovies = async () => {
      const getHomePageMovies = await axios.get("/movie/top_rated");
      setHomePageMovies(getHomePageMovies.data.results);
    };
    requestHomePageMovies();
  }, []);
  console.log({ homePageMovies });

  const [homePageMovies1, setHomePageMovies1] = useState([]);
  useEffect(() => {
    const requestHomePageMovies = async () => {
      const getHomePageMovies = await axios.get("/movie/now_playing");
      setHomePageMovies1(getHomePageMovies.data.results);
    };
    requestHomePageMovies();
  }, []);
  console.log({ homePageMovies1 });

  const [premierMovies, setPremierMovies] = useState([]);
  useEffect(() => {
    const requestPremierMovies = async () => {
      const getPremierMovies = await axios.get("/movie/popular");
      setPremierMovies(getPremierMovies.data.results);
    };
    requestPremierMovies();
  }, []);
  console.log({ premierMovies });

  return (
    <>
      <div className="container mx-auto py-4 pb-20">
        <PosterSlider
          images={homePageMovies}
          title="Recommended Movies"
          isDark={false}
        />
      </div>
      <div className="px-14 pb-6 cursor-pointer">
        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="poster" />
      </div>
      <div className="container mx-auto px-3 py-14">
        <h1 className="lg:text-2xl md:text-xl font-bold text-gray-700 pt-3 pb-2 pl-1 lg:pl-4">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="bg-premierColor-100 py-6">
        <div className="container mx-auto">
          <div className="flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Premier|Rupay"
              className="w-full h-full pb-9 px-2"
            />
          </div>
          <PosterSlider
            images={premierMovies}
            title="Premieres"
            subtitle="Brand new releases every Friday"
            isDark
          />
        </div>
      </div>
      <div className="container mx-auto py-6">
        <PosterSlider
          images={homePageMovies1}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto py-6">
        <PosterSlider
          images={homePageMovies}
          title="Outdoor Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto py-6">
        <PosterSlider
          images={homePageMovies1}
          title="Laughter Therapy"
          isDark={false}
        />
      </div>

      <div className="container mx-auto py-6">
        <PosterSlider
          images={premierMovies}
          title="Popular Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto py-6">
        <PosterSlider
          images={homePageMovies}
          title="Top Games & Sport Events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
