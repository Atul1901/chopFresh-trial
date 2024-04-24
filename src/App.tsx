import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import { Product } from "./components/Product";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Feature />
      <Product />
    </div>
  );
};

export default App;
