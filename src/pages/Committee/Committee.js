import React from "react";
import ProfilesViewer from "../../components/ProfilesViewer";

const Committee = () => {
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll pt-16">
      <ProfilesViewer endPoint="members" header="All Members" />
    </div>
  );
};

export default Committee;
