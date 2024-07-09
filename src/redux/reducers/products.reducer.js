// Create a slice
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
  },
  reducers: {
    saveAllProducts: (state, action) => {
      return {
        ...state,
        products: action.payload.data,
      };
    },
  },
});

export const { saveAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
