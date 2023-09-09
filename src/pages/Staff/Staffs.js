import React from "react";
import ProfilesViewer from "../../components/ProfilesViewer";

const Staffs = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll pt-16">
      <ProfilesViewer endPoint="staffs" header="All Staffs" />
    </div>
  );
};

export default Staffs;
