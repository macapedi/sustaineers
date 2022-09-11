import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import ImageSlider from "./slide/ImageSlider";
import { SliderData } from "./slide/SliderData";
const Landing = () => {
  return (
    <div className="wrapper">
      <div>
        <ImageSlider slides={SliderData} />
      </div>
      <div className="texts">
        <div className="title"> Sustaineers</div>
        <div className="subtitle"> Let's save our planet together</div>
        <Link to={"/signin"} className="link">
          Start Now →
        </Link>
      </div>
    </div>
  );
};

export default Landing;
