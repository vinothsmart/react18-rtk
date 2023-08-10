import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/productssss");
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
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, state => {
        state.status = "failed";
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
