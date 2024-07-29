import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

const intialState = {
  data: [],
  status: "IDEL",
};

export const getUsers = createAsyncThunk("products/users", async () => {
  const data = await fetch(USER_URL);
  console.log("vinothcreateAsyncThunk", data);
  const result = await data.json();
  return result;
});

const userSlice = createSlice({
  name: "users",
  intialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.status = "LOADING";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "IDEL";
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, state => {
        state.status = "ERROR";
      });
  },
});

export const { fethUsers } = userSlice.actions;
export default userSlice.reducer;
