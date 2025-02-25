import React from "react";
import compare from "../assets/compare.png";
import { FaRegStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import "../css/recommend.css";

// Define the expected props for the component
interface Product {
  image: string;
  alt?: string;
  discount: number; // Discount percentage
  name: string; // Product name
  price: number; // New price
  oldPrice: number; // Old price
  description: string; // Description
  description1: string;
}
interface ProductProps {
  product: Product;
}

// Accept props using the defined interface
const RecommendedProducts: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="recommend">
      <div className="grids">
        <div className="product1">
          <img src={product.image} alt={product.alt} />
          <FaRegStar className="star" />
          <CiShare2 className="share" />
          <div className="stock">
            <TiTick className="tick" />
            <p>In stock</p>
          </div>

          <img src={compare} alt="compare" className="compare" />

          <span className="badge1">-{product.discount}%</span>

          <div>
            <p className="description">{product.description}</p>
            <h3 className="name">{product.name}</h3>

            <div className="desktop-only">
              <p
                dangerouslySetInnerHTML={{
                  __html: product.description1.replace(/,/g, "<br />"),
                }}
              />
            </div>

            <p className="price">
              Your price <span className="dollars">${product.price}</span> net{" "}
              <br />
              <span className="cut">${product.oldPrice} not</span>
            </p>
          </div>
          <div className="quantity">
            <button className="btn">1</button>
            <div className="select-container">
              <select className="item" name="item">
                <option value="item">Item</option>
              </select>
              <FaAngleDown className="icon" />
            </div>
          </div>

          <div>
            <button className="addCart">
              Add to cart &nbsp; <FaAngleDown className="down" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
