import React from "react";
import product1 from "../../assets/productImage1.png";
import product2 from "../../assets/productImage2.png";

import RecommendedProducts from "./RecommendedProducts";
import "../../css//Products/recommend.css";
import ShowAll from "./ShowAllProducts";

const Products: React.FC = () => {
  const products = [
    {
      image: product1,
      alt: "handle omnires",
      discount: 30,
      name: "Connection with a handle Omnires round",
      price: 45.0,
      oldPrice: 55.0,
      description: "Omnires | Part No. 2123532",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
    },
    {
      image: product2,
      alt: "image2",
      discount: 30,
      name: "Countertop washbasin GoodHome Tekapo",
      price: 51.0,
      oldPrice: 64.0,
      description: "Omnires | Part No. 2123532",
      description1: "Basin width: 45cm, Basin Height: 12 cm, Basin depth:35cm",
    },
  ];

  return (
    <div>
      <div className="align">
        <h2>Recommended Products</h2>
        <div className="showBig">
          <ShowAll />
        </div>
      </div>
      <div className="grids">
        {products.map((product, index) => (
          <RecommendedProducts key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
