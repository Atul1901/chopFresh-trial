import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Feature from "../components/Feature";
import { Product } from "../components/Product";
import AboutInfo from "../components/AboutInfo";
import OurCustomer from "../components/OurCustomer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Feature />
      <Product />
      <AboutInfo />
      <OurCustomer />
      <Footer />
    </div>
  );
};

export default Home;
