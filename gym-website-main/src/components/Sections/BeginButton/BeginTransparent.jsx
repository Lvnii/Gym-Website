import React from "react";

const BeginTransparent = ({
  to = "#about",
  children = "დაიწყე აქ",
  className = "",
  aos = "fade-up",
  aosDelay = "0"
}) => {
  return (
    <a
      href={to}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`button-outline inline-block ${className}`}
    >
      {children}
    </a>
  );
};

export default BeginTransparent;
    ;
