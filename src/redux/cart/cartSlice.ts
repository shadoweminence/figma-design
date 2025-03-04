import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  items: [],
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
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
