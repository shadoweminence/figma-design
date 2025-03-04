import React, { useState } from "react";
import product1 from "../../assets/productImage1.png";
import product2 from "../../assets/productImage2.png";
import product3 from "../../assets/productImage3.png";
import product4 from "../../assets/productImage4.png";

import { FaChevronRight } from "react-icons/fa";

import ShowAll from "./ShowAllProducts";
import Product from "./Product";
import useScreenSize from "../hooks/useScreenSize";

const Products: React.FC = () => {
  const isLaptop = useScreenSize();

  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = isLaptop ? 4 : 2; // Number of products to show at a time

  const products = [
    {
      productId: 1,
      image: product1,
      alt: "handle omnires",
      discount: 30,
      name: "Connection with a handle Omnires round",
      price: 45.0,
      oldPrice: 55.0,
      description: "Omnires | Part No. 2123532",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
      stock: true,
    },
    {
      productId: 2,
      image: product2,
      alt: "image2",
      discount: 30,
      name: "Countertop washbasin GoodHome Tekapo",
      price: 51.0,
      oldPrice: 64.0,
      description: "Omnires | Part No. 2123532",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
      stock: true,
    },

    {
      productId: 3,
      image: product3,
      alt: "image3",
      discount: 30,
      name: "Perforated Simpson tape 25 x 2500 x 2 mm",
      price: 51.0,
      oldPrice: 64.0,
      description: "GoodHome | Part No. 234565",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
      stock: true,
    },
    {
      productId: 4,
      image: product4,
      alt: "image4",
      discount: 30,
      name: "AMBER DECOR Bulb 60W, E27 590",
      price: 51.0,
      oldPrice: 64.0,
      description: "GoodHome | Part No. 234565",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
      stock: false,
    },
  ];

  const handleNext = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + productsPerPage) % products.length
    );
  };

  return (
    <div className="rec">
      {isLaptop ? (
        <>
          <div className="productsAlign">
            <h2>Recommended Products</h2>
            <div className="showBig">
              <ShowAll />
            </div>
          </div>
          {/* Product container with scrolling effect */}
          <div className="product-container">
            {products
              .slice(startIndex, startIndex + productsPerPage)
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>

          {/* Buttons for scrolling */}
          <div className="button-container">
            <button onClick={handleNext}>
              {" "}
              <FaChevronRight className="iconsssss" />
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Recommended Products</h2>
          <div className="showBig">
            <ShowAll />
          </div>
          {/* Product container with scrolling effect */}
          <div className="product-container">
            {products
              .slice(startIndex, startIndex + productsPerPage)
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>

          {/* Buttons for scrolling */}
          <div className="button-container">
            <button onClick={handleNext}>
              {" "}
              <FaChevronRight className="iconsssss" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
