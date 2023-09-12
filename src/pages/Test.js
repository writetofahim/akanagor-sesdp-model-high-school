import React from "react";
import AtaGlance from "../components/AtaGlance";

const Test = () => {
  return (
    <div className="border-8 flex">
      <div className="flex gap-5">
        {/* at a glance */}
        <div className="flex-1 h-full">
          <AtaGlance />
        </div>
        {/* about */}
        <div className="bg-white dark:bg-gray-700 rounded-md p-2 shadow-md h-full flex-1">
          <h3 className="text-center mb-2 text-xl">
            Discover Akanagar <span className="text-orange-300">SESDP</span>{" "}
            Model High School
          </h3>
          <div className=" rounded p-4">
            <p className="  pb-2">
              Welcome to Akanagar SESDP Model High School, a beacon of education
              and growth since our inception in 2012. Over the years, we have
              established ourselves as a cherished institution dedicated to
              nurturing young minds and preparing them for a dynamic world.
            </p>
            <p className="  pb2">
              Our journey began with a vision to provide quality education that
              empowers students to thrive academically, personally, and
              socially. As we celebrate each passing year, we are humbled by the
              achievements of our students and the contributions they make to
              society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
