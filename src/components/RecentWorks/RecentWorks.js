/**
This is a React functional component called RecentWorks which renders a section of recent works. 
It imports the RecentWorksSlider component, which is a slider that displays each work item.
 */

import React from "react";
import RecentWorksSlider from "./RecentWorksSlider";

const RecentWorks = () => {
  return (
    <div className="w-full overflow-hidden  md:flex md:flex-col md:justify-center">
      <h3 className="text-center text-xl">Recent Events</h3>
      <div className="p-3 md:p-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
        <RecentWorksSlider />
      </div>
    </div>
  );
};

export default RecentWorks;
