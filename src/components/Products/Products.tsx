import React, { useState } from "react";
import { products } from "../../Utils/Items";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import ShowAll from "./ShowAllProducts";
import Product from "./Product";
import useScreenSize from "../hooks/useScreenSize";
import "../../css/Products/product.css";

const Products: React.FC = () => {
  const isLaptop = useScreenSize();

  const [startIndex, setStartIndex] = useState(0);

  const productsPerPage = isLaptop ? 4 : 2; // Number of products to show at a time

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1) % products.length);
  };

  return (
    <div className="rec">
      {isLaptop ? (
        <div className="productsAlign">
          <h2>Recommended Products</h2>
          <div className="showBig">
            <ShowAll />
          </div>
        </div>
      ) : (
        <>
          <h2 className="recommendH2">Recommended Products</h2>
          <div className="showBig">
            <ShowAll />
          </div>
        </>
      )}

      <div className="product-container">
        {products
          .slice(startIndex, startIndex + productsPerPage)
          .map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>

      {startIndex != 0 && (
        <div className="leftButtonContainer" onClick={handlePrevious}>
          <GoChevronLeft className="iconRight" />
        </div>
      )}

      {startIndex != products.length - 4 && (
        <div className="rightButtonContainer" onClick={handleNext}>
          <GoChevronRight className="iconRight" />
        </div>
      )}
    </div>
  );
};

export default Products;
