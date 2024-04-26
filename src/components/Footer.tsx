import React from "react";
import "./Footer.css";
import footerLogo from "../utils/photos/footerlogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-head">
          <img src={footerLogo} alt="the logo here present in footer" />
          <p>PLATEFORM</p>
        </div>
        <div>
          <div className="footer-content-head">
            <p>Features</p>
          </div>
          <div className="fooer-content">
            <p>Management</p>
            <p>Communication</p>
            <p>Analytic</p>
          </div>
        </div>
        <div>
          <div className="footer-content-head">
            <p>Success stories</p>
          </div>
          <div className="fooer-content">
            <p>Avoburger</p>
            <p>StarCoffee</p>
            <p>Forest Hotdogs</p>
          </div>
        </div>
        <div>
          <div className="footer-content-head">
            <p>Social Media</p>
          </div>
          <div className="fooer-content">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
          </div>
        </div>
        <div className="contact-container">
          <div className="footer-content-head">
            <p>contact</p>
          </div>
          <div className="fooer-content">
            <p>123 Main Street, Cityville, Stateville, ZIP Code</p>
            <p>hello@plateform.io</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
