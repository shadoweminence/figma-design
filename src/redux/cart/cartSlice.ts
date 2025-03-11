import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLocalCart, getLocalCart } from "../LocalStorageUtils";
interface Cart {
  id: number;
  productId: number;
  name: string;
  price: number | undefined;
}

interface CartState {
  items: Cart[];
  // productDescription : Cart |null;
}

const initialState: CartState = {
  items: getLocalCart(),
};

export const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItems: (
      state,
      action: PayloadAction<{ productId: number; name: string; price: number }>
    ) => {
      const newCartItem: Cart = {
        id: Date.now(),
        productId: action.payload.productId,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.items.push(newCartItem);
      setLocalCart(state.items);
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
