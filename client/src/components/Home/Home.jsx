import React from "react";
import BannerBackground from "../../Assets/about-background.png";
import BannerImage from "../../Assets/addIssue.png";
import About from "./About";
import Work from "./Work";

const Home = () => {
    return (
      
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your own planner
            </h1>
            <p className="primary-text">
              Take control and play your life the way you want.
            </p>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <About />
        <Work />
      </div>
    );
  };

export default Home;