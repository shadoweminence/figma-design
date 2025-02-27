import React from "react";
import { FaRegStar } from "react-icons/fa";
import compare from "../../../assets/compare.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../../../css/Header/laptop/options.css";

const Icons = () => {
  return (
    <div>
      <div className="optionsGrid">
        <div className="comp">
          <img src={compare} alt="" />
          <p className="topics">COMPARE</p>
          <span className="compareValue">3</span>
        </div>
        <div>
          <FaRegStar className="navStar" />
          <p className="topics">FAVORITES</p>
          <span className="starValue">7</span>
        </div>
        <div>
          <MdOutlineShoppingCart className="navCart" />
          <p className="topics">CART</p>
          <p className="topicss">Active Cart Name</p>
          <span className="cartValue">45</span>
        </div>
      </div>
    </div>
  );
};

export default Icons;
