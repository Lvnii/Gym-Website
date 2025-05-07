import React from "react";

const BeginButton = ({ to = "#about", children = "დაიწყე აქ", className = "" }) => {
  return (
    <a
      href={to}
      className={`primary-btn inline-block ${className}`}
    >
      {children}
    </a>
  );
};

export default BeginButton;
