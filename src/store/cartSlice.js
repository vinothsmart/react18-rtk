import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { add, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
