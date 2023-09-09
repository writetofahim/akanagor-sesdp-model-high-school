import React from "react";
import PdfViewer from "../../components/PdfViewer";

const BoardResults = () => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] overflow-x-scroll my-20">
      <PdfViewer endPoint="results/board/" heading="Board Results" />
    </div>
  );
};

export default BoardResults;
