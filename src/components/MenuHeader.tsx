import React from "react";
import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="menu-head">
        <div className="menu-head-section">
          <h1 className="Menu-title">Our Menu</h1>
          <p className="menu-text">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="menu-buttons">
          <button className="btns">All</button>
          <button className="btns">Breakfast</button>
          <button className="btns">Main Dishes</button>
          <button className="btns">Drinks</button>
          <button className="btns">Desserts</button>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
