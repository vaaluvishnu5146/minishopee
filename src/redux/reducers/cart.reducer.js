// Create a slice
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log("addItemToCart", state, action);
    },
    changeItemQuantity: (state, action) => {
      console.log(state, action);
    },
    removeItemFromCart: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addItemToCart, changeItemQuantity, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
