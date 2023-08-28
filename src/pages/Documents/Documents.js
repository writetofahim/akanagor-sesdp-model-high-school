import React from "react";

const Documents = () => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-16 ">
      <h3>docs 1</h3>
      <div>
        <iframe
          src="https://drive.google.com/file/d/1YiXAYlm-Y7byfzNYunvEd0fmS9zvWJgM/preview"
          title="PDF Viewer"
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </div>
  );
};

export default Documents;
