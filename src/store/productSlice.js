import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDEL,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = StatusCode.IDEL;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, state => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
