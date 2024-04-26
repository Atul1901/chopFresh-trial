import React from "react";
import chopFreshLogo from "../utils/photos/ChopFreshNavbarlogo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="company">
        <div className="company-logoname">
          <img
            src={chopFreshLogo}
            alt="logo of Chop Fresh"
            className="navbar-logo"
          ></img>
          <p>Chop Fresh</p>
        </div>
        <div className="navbar-menu">
          <p className="menu-txt">Home</p>
          <p className="menu-txt">About</p>
          <p className="menu-txt">Menu</p>
          <p className="menu-txt">Pages</p>
          <p className="menu-txt">Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
