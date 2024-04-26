import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import { Product } from "./components/Product";
import AboutInfo from "./components/AboutInfo";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Feature />
      <Product />
      <AboutInfo />
    </div>
  );
};

export default App;
