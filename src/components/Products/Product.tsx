import React from "react";
import Products from "./Products";
import ShowAll from "./ShowAllProducts";
import "../../css/flex.css";

const Product = () => {
  return (
    <div className="flex">
      <Products />

      <ShowAll />
    </div>
  );
};

export default Product;
