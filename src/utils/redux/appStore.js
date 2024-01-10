import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import resListReducer from "./resListSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: resListReducer,
  },
});
export default appStore;
