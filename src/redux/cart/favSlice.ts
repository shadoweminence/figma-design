import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalFavItems, setLocalfavItems } from "../LocalStorageUtils";

interface Fav {
  id: number;

  productId: number;
  name: string;
  price: number;
}

interface FavState {
  items: Fav[];
  // productDescription : Cart |null;
}

const initialState: FavState = {
  items: getLocalFavItems(),
};

export const favSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addFavItems: (
      state,
      action: PayloadAction<{
        productId: number;

        name: string;
        price: number;
      }>
    ) => {
      const newFavItem: Fav = {
        id: Date.now(),

        productId: action.payload.productId,
        name: action.payload.name,
        price: action.payload.price,
      };

      state.items.push(newFavItem);

      setLocalfavItems(state.items);
    },
    deleteItems: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
      setLocalfavItems(state.items);
    },
  },
});

export const { addFavItems, deleteItems } = favSlice.actions;
export default favSlice.reducer;
