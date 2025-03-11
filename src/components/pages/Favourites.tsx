import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteItems } from "../../redux/cart/favSlice";

import { addItems } from "../../redux/cart/cartSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.fav.items);

  const handleRemove = (id: number) => {
    dispatch(deleteItems(id));
  };
  const handleAddToCart = (productId: number, name: string, price: number) => {
    dispatch(addItems({ productId, name, price }));
  };

  return (
    <div>
      {favItems.map((item, index) => (
        <li key={index}>
          <div>Item Id :{item.id}</div>
          <div>Product Id:{item.productId}</div>

          <div>Name:{item.name}</div>

          <div>Price: {item.price}</div>
          <button onClick={() => handleRemove(item.productId)}>
            Remove from favourite
          </button>
          <button
            onClick={() =>
              handleAddToCart(item.productId, item.name, item.price)
            }
          >
            Add to Cart
          </button>
        </li>
      ))}
    </div>
  );
};

export default Favourites;
