import React from "react";
import "./Banner.scss";
import "./Banner.png";

const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("${process.env.PUBLIC_URL}/assets/images/Banner.png")`,
      }}
    >
      <h1 className="banner-title">{props.text}</h1>
    </div>
  );
};
export default Banner;
