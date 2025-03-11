import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

import favReducer from "./cart/favSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
