import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../Config/TempPosters.config";

const HomePage = () => {
  return (
    <>
     <div className="cointainer mx-auto px-4 lg:px-12 py-4">
        <PosterSlider
          images={TempPosters}
          title="Recommended Movies"
          isDark={false}
        />
      </div>
      <div className="cointainer mx-auto px-4 lg:px-12 py-12">
        <h1 className="lg:text-2xl md:text-xl font-bold text-gray-700 pt-3 pb-1.5 pl-4">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>                                                                                                                                                      

      <div className="bg-premierColor-100 py-11">
        <div className="container mx-auto px-4">
          <div className="flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Premier|Rupay"
              className="w-full h-full pb-9 px-2"
            />
          </div>
          <PosterSlider
            images={TempPosters}
            title="Premieres"
            subtitle="Brand new releases every Friday"
            isDark
          />
        </div>
      </div>
      <div className="cointainer mx-auto px-4 lg:px-12 py-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        <PosterSlider
          images={TempPosters}
          title="Outdoor Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        <PosterSlider
          images={TempPosters}
          title="Laughter Therapy"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        <PosterSlider
          images={TempPosters}
          title="Popular Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 py-10">
        <PosterSlider
          images={TempPosters}
          title="Top Games & Sport Events"
          isDark={false}
        />
      </div>

    </>
  );
};

export default HomePage;
