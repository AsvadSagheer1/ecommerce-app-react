import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from "../features/slices/sliderSlice"
import productReducer from "../features/slices/productSlices"
import cartReducer from "../features/slices/cartSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
