import React from "react";
import Products from "./Products";

import "../../css/flex.css";
import ShowAll from "./ShowAllProducts";

const Product = () => {
  return (
    <div className="flex">
      <Products />

      <div className="showSmall">
        <ShowAll />
      </div>
    </div>
  );
};

export default Product;
