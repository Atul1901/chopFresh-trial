import React from "react";
import fastdeployicon from "../utils/photos/fastdeployIcon.svg";
import easylearnicon from "../utils/photos/easylearnIcon.png";
import futurerichicon from "../utils/photos/futurerichIcon.svg";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="feature-container">
          <div className="top-button">
            <p className="btn-text">THIS IS PLATEFORM </p>
          </div>
          <div>
            <h3 className="feature-title">Restaurant reimagined</h3>
            <p className="featuer-desc">
              We are one-stop solution to track, optimize and deliver food with
              an easy to use mobile app for ordering and our award winning
              desktop app for manament.
            </p>
          </div>
          <div className="all-icons">
            <div className="feature-icon">
              <img src={fastdeployicon} alt="icon for fast deploying" />
              <p>Fast to deploy</p>
            </div>
            <div className="feature-icon">
              <img src={easylearnicon} alt="icon for easy learning" />
              <p>Easy to learn</p>
            </div>
            <div className="feature-icon">
              <img src={futurerichicon} alt="icon for future rich" />
              <p>Future rich</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
