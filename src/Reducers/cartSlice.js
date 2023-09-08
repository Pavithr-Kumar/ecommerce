import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const arr = [...state];
      arr.splice(action.payload, 1);
      return [...arr];
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
