import React from "react";
import PdfViewer from "../../components/PdfViewer";

const RegularResults = () => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] overflow-x-scroll my-20">
      <PdfViewer endPoint="results/regular/" heading="Regular Results" />
    </div>
  );
};

export default RegularResults;
