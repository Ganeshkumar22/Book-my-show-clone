import React from "react";
import GridPosterConfig from "../components/GridPosterConfig/GridPosterConfig.component";
import GridPosterImages from "../Config/GridPosterImages.config";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Playspage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="lg:w-full lg:pl">
            <h1 className="mt-10 lg:text-2xl lg:ml-24 md:text-xl md:ml-4 ml-4 font-bold text-gray-800 lg:pb-5">
              Plays In Thiruthuraipoondi
            </h1>
            <div>
              <GridPosterConfig images={GridPosterImages} />
            </div>
          </div>
          <div className="lg:w-4/12 mt-10">
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
