import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaRegStar } from "react-icons/fa";
import compare from "../../../assets/compare.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../../../css/Header/laptop/nav.css";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

const Icons = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const favItems = useSelector((state: RootState) => state.fav);
  const [isCart, setIsCart] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const toggleRef = useRef<HTMLDivElement>(null);
  const toggleCart = () => {
    setIsCart(!isCart);
  };
  const toggleFav = () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const redirectCartItem = (id: number) => {
    navigate(`../../Products/Product/${id}`);
  };
  return (
    <div>
      <div className="optionsGrid">
        <div className="comp">
          <img src={compare} alt="" />
          <p className="topics">COMPARE</p>
          <span className="compareValue">3</span>
        </div>
        <div ref={toggleRef} onClick={toggleFav}>
          <FaRegStar className="navStar" />
          <p className="topics">FAVORITES</p>
          <span className="starValue">{favItems.items.length}</span>
        </div>

        {isFav && (
          <div className="toggledFav">
            <ul>
              {favItems.items.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div ref={toggleRef}>
          <div onClick={toggleCart}>
            <MdOutlineShoppingCart className="navCart" />
            <p className="topics">CART</p>
            <p className="topicss">Active Cart Name</p>
            <span className="cartValue">{cart.items.length}</span>
          </div>
          {isCart && (
            <div className="toggledCart">
              <ul>
                {cart.items.map((item) => (
                  <li
                    key={item.productId}
                    onClick={() => redirectCartItem(item.productId)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Icons;
