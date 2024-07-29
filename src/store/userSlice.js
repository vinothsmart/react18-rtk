import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

const intialState = {
  data: [],
  status: "IDEL",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const data = await fetch(USER_URL);
  const result = await data.json();
  return result;
});

const userSlice = createSlice({
  name: "users",
  initialState: intialState,
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

export default userSlice.reducer;
