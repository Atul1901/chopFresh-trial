import React from "react";
import headImage from "../utils/photos/hero-img 1.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="head-section">
        <div className="head-text">
          <p className="head-desc">
            Remember us whenever your tummy ask for Something good.
          </p>
          <h3 className="head-title">
            Where every <span className="red-text">flavor Tells</span> a{" "}
            <span className="red-text">story</span>.
          </h3>
        </div>
        <div className="head-image">
          <img
            src={headImage}
            alt="bowl with some tasty dish"
            className="head-img"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
