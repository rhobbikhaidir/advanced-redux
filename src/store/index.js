import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cart-slices";
import uiSlice from "./ui-slices";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlices.reducer
  },
});

export default store;
