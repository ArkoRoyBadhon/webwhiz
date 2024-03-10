import React from "react";

const Ellipse1 = ({ width = 64, height = 64 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <circle cx="32" cy="32" r="32" fill="#9965CF" fill-opacity="0.1" />
    </svg>
  );
};

export default Ellipse1;
