import React from "react";
import Logo from "../../assets/go-scrum-logo-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__brand">
        <img src={Logo} alt="logo" className="hero__img" />
        <h1 className="heading--primary">Go Scrum</h1>
      </div>

      {/* WAVES ANIMATION */}
      <div className="wrapper">
        <div className="wave wave--1"></div>
        <div className="wave wave--2"></div>
      </div>
    </div>
  );
};

export default Hero;
