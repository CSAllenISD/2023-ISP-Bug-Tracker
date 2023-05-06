import React from "react";
import AboutBackground from "../../Assets/about-background2.png";
import AboutBackgroundImage from "../../Assets/viewissue.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          See the problems you have to tackle
        </h1>
        <p className="primary-text">
          A dedicated section for you see the issue you can work towards.
        </p>
      </div>
    </div>
  );
};

export default About;