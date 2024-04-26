import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import { Product } from "./components/Product";
import AboutInfo from "./components/AboutInfo";
import Footer from "./components/Footer";
import OurCustomer from "./components/OurCustomer";
import Navbar from "./components/Navbar";

const App = () => {
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

export default App;
