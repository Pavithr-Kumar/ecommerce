import { configureStore } from "@reduxjs/toolkit";
import maindataSlice from "./maindataSlice";
import cartSlice from "./cartSlice";
export const Store = configureStore({
  reducer: {
    maindata: maindataSlice,
    cart: cartSlice,
  },
});
