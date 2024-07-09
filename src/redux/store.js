import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products.reducer";
import cartReducer from "./reducers/cart.reducer";

export default configureStore({
  // Root reducer
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
