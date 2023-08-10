import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const getProducts = () => async (dispatch, getState) => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  dispatch(fetchProducts(result));
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
