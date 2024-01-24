import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await fetch(
      "https://course-api.com/react-useReducer-cart-project"
    );
    const cartItems = await response.json();
    return cartItems;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount++;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount--;
    },
    calculateTotals: (state) => {
      let { total, amount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      state.total = total;
      state.amount = amount;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
