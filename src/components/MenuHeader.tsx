import React from "react";
import "./MenuHeader.css";
import MenuCards from "./MenuCards";
import menuFriedEgg from "../utils/photos/Menufriedegg.svg";
import hawaiinPizza from "../utils/photos/Hawaiinpizza.svg";
import martinezCocktail from "../utils/photos/martinezcocktail.svg";
import butterscotchCake from "../utils/photos/Butterscotchcake.svg";
import mintLemonade from "../utils/photos/mintlemonade.svg";
import chocolateIcecream from "../utils/photos/chocolateicecream.svg";
import cheeseBurger from "../utils/photos/CheeseBurger.svg";
import classicWaffle from "../utils/photos/Classixwaffle.svg";
const MenuHeader = () => {
  const menuData = [
    {
      image: menuFriedEgg,
      price: "9.99",
      title: "Fried eggs",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: hawaiinPizza,
      price: "15.99",
      title: "Hawaiian Pizza",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: martinezCocktail,
      price: "7.25",
      title: "Martinez Cocktail",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: butterscotchCake,
      price: "20.99",
      title: "Butterscotch Cake",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: mintLemonade,
      price: "5.89",
      title: "Mint Lemonade",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: chocolateIcecream,
      price: "18.05",
      title: "Chocolate Icecream",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: cheeseBurger,
      price: "12.55",
      title: "Cheese Burger",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
      image: classicWaffle,
      price: "12.99",
      title: "Classic Waffles",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
  ];
  return (
    <div style={{ paddingBottom: "100px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
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
      <div className="menu-cards">
        {menuData.map((card, index) => {
          return (
            <MenuCards
              key={index}
              image={card.image}
              title={card.title}
              price={card.price}
              desc={card.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHeader;
