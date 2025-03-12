import React from "react";
import compare from "../../assets/compare.png";

import { MdOutlineShare } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaAngleDown, FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import "../../css/Products/product.css";
import { addItems } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";
import { addFavItems, deleteItems } from "../../redux/cart/favSlice";
import { ProductProps } from "../../Utils/Interface";

// Accept props using the defined interface
const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);
  const favItems = useSelector((state: RootState) => state.fav.items);

  const handleCart = () => {
    dispatch(
      addItems({
        productId: product.productId,
        name: product.name,
        price: product.price,
      })
    );
  };
  const handleFav = () => {
    dispatch(
      addFavItems({
        productId: product.productId,
        name: product.name,
        price: product.price,
      })
    );
  };
  const removeFav = (id: number) => {
    dispatch(deleteItems(id));
  };
  return (
    <div className="productCard">
      <div className="product1">
        <img className="productImage" src={product.image} alt={product.alt} />

        {favItems.some((item) => item.productId === product.productId) ? (
          <IoIosStar
            onClick={() => removeFav(product.productId)}
            className="star"
          />
        ) : (
          <IoIosStarOutline onClick={() => handleFav()} className="star" />
        )}
        <MdOutlineShare className="share" />
        <div className="stock">
          {product.stock ? (
            <>
              <TiTick className="tick" />
              <p>In stock</p>
            </>
          ) : (
            <p className="noStock">
              <FaExclamationCircle className="exclamation" />
              Exp. Delivery on Jun14,2022
            </p>
          )}
        </div>

        <img src={compare} alt="compare" className="compare" />

        <span className="badge1">-{product.discount}%</span>

        <div className="productDescription">
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
            <span className="cut">${product.oldPrice} net</span>
          </p>
        </div>
        <div className="quantity">
          <button className="btn">1</button>
          <div className="select-container">
            <div className="item">Item</div>
            <FaAngleDown className="icon" />
          </div>
        </div>
        {items.some((item) => item.productId === product.productId) ? (
          <>
            <div>
              <button className="addCart">
                Update Cart &nbsp; <FaAngleDown className="down" />{" "}
              </button>
            </div>

            <div>
              <p className="cartAdded">
                <TiTick className="tick" />
                Added to Cart
              </p>
            </div>
          </>
        ) : (
          <div>
            <button className="addCart" onClick={() => handleCart()}>
              Add to cart &nbsp; <FaAngleDown className="down" />{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
