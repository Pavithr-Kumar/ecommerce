import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { data: [], status: "idle" };
const maindataSlice = createSlice({
  name: "maindata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.data = "error";
      });
  },
});

export const getProducts = createAsyncThunk("get/products", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  return result;
});

export default maindataSlice.reducer;
