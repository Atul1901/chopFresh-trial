import React from "react";
import "./Product.css";
import backgroundimage from "../utils/photos/specialdishbackground.svg";
import Cards from "./Cards";
import standBurger from "../utils/photos/standardburger.svg";
import mangoCake from "../utils/photos/mangocake.svg";
import mangoCake2 from "../utils/photos/mangocake2.svg";
import cardsbackground from "../utils/photos/cardsbackground.svg";
import bowlDish from "../utils/photos/productabout.svg";
import welcomebackgroundright from "../utils/photos/welcomebackgroundright.svg";
import welcomebackgroundbottom from "../utils/photos/welcomebackgroundbottom.svg";
import welcomebackgroundleft from "../utils/photos/welcomebackgroundleft.svg";
import welcomebackgroungtop from "../utils/photos/welcomebackgroungtop.svg";
import leafRight from "../utils/photos/leaf-right.svg";
import leafLeft from "../utils/photos/leaf-left.svg";
import leafBottomRight from "../utils/photos/leaf-bottomright.png";
import leafBottomLeft from "../utils/photos/leaf-bototmleft.svg";

export const Product = () => {
  const cardData = [
    {
      image: standBurger,
      title: "Stand Burger",
      price: "25.00",
      tara: "2.6",
      calories: "65 calories",
      wakht: "20-30 min",
      color: "#FFEBEB",
    },
    {
      image: mangoCake,
      title: "Mango Cake",
      price: "29.00",
      tara: "4.1",
      calories: "120 calories",
      wakht: "45-55 min",
      color: "#DEFFFF",
    },
    {
      image: mangoCake2,
      title: "Mango Cake",
      price: "32.64",
      tara: "3.6",
      calories: "65 calories",
      wakht: "15-30 min",
      color: "#FFF0DF",
    },
  ];

  return (
    <>
      <div className="product-container">
        <div className="products-head">
          <h2 className="products-heading">Our Special Dish</h2>
          <p className="products-desc">
            Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
            arcu, nec vehicula eros.
          </p>
          <div className="background-img">
            <img src={backgroundimage} alt="a background for decoration"></img>
          </div>
        </div>
        <div className="all-cards">
          {cardData.map((card, index) => {
            return (
              <Cards
                key={index}
                image={card.image}
                title={card.title}
                price={card.price}
                tara={card.tara}
                calories={card.calories}
                wakht={card.wakht}
                color={card.color}
              />
            );
          })}
        </div>
        <div className="background-img card-background">
          <img src={cardsbackground} alt="a background for decoration"></img>
        </div>
        <div className="product-info">
          <img
            src={bowlDish}
            alt="the dish that shows about the restuarant"
            className="product-image"
          />

          <div className="product-details">
            <h2 className="product-details-title">Welcome to Our Restaurant</h2>
            <p className="producr-details-desc">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros. Praesent egestas gravida
              tincidunt. Etiam convallis.
            </p>
            <button className="product-menubtn">Menu</button>
          </div>
          <div className="background-img weclome-right">
            <img
              src={welcomebackgroundright}
              alt="a background for decoration"
            ></img>
          </div>
          <div className="background-img weclome-bottom">
            <img
              src={welcomebackgroundbottom}
              alt="a background for decoration"
            ></img>
          </div>
          <div className="background-img weclome-left">
            <img
              src={welcomebackgroundleft}
              alt="a background for decoration"
            ></img>
          </div>
          <div className="background-img weclome-top">
            <img
              src={welcomebackgroungtop}
              alt="a background for decoration"
            ></img>
          </div>
          <div
            className="background-img "
            style={{ opacity: 5, transform: "translate(125%, -20%)" }}
          >
            <img src={leafRight} alt="leaf for decoration"></img>
          </div>
          <div
            className="background-img "
            style={{ opacity: 5, transform: "translate(-52%, 0%)" }}
          >
            <img src={leafLeft} alt="leaf for decoration"></img>
          </div>
          <div
            className="background-img "
            style={{ opacity: 5, transform: "translate(233%, 161%)" }}
          >
            <img src={leafBottomRight} alt="leaf for decoration"></img>
          </div>
          <div
            className="background-img "
            style={{ opacity: 5, transform: "translate(-52%, 177%)" }}
          >
            <img src={leafBottomLeft} alt="leaf for decoration"></img>
          </div>
        </div>
      </div>
    </>
  );
};
