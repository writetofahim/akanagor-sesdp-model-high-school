// import React, { useState } from "react";
// import placeholderImage from "../assets/placeholder/placeholder-image.png";

// const ImageWithPlaceholder = ({ actualSrc, alt, className }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       {!imageLoaded && (
//         <img
//           src={placeholderImage}
//           alt="placeholder"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//           className={className}
//         />
//       )}

//       <img
//         src={actualSrc}
//         alt={alt}
//         onLoad={handleImageLoad}
//         style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s" }}
//         className={className}
//       />
//     </div>
//   );
// };

// export default ImageWithPlaceholder;

import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ImageWithPlaceholder = ({ actualSrc, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div style={{ position: "relative" }}>
      {!imageLoaded && (
        // <img
        //   src={placeholderImage}
        //   alt="placeholder"
        //   style={{
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //   }}
        //   className={className}
        // />
        // h-36 w-36 rounded-full
        <div className={`top-0 left-0 absolute ${className}`}>
          <Skeleton
            circle
            className={className}
            // width="100%"
            containerClassName=""
            // containerClassName="rounded-full"
          />
        </div>
      )}

      <img
        src={actualSrc}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s" }}
        className={className}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
