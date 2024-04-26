import React from "react";
import aboutInfo from "../utils/photos/aboutInfo.svg";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <>
      <div className="about-info-container">
        <div className="about-picture">
          <img
            src={aboutInfo}
            alt="food in about company area"
            style={{ width: " 90%" }}
          />
          <div className="address">
            <p className="addr-head">Come and visit us</p>
            <p className="addr">(414) 857 - 0107</p>
            <p className="addr">happytummy@restaurant.com</p>
            <p className="addr">
              837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
            </p>
          </div>
        </div>

        <div className="about-info-desc">
          <h2 className="about-info-title">
            We provide healthy food for your family.
          </h2>
          <p className="about-info-para1">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="about-info-para2">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className="about-info-button">More About Us</button>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
