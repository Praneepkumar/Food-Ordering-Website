import { createSlice } from "@reduxjs/toolkit";

const resListSlice = createSlice({
  name: "restaurants",
  initialState: [],
  reducers: {
    addRestaurantList(state, action) {
      return [...state, ...action.payload];
    },
  },
});
export const { addRestaurantList } = resListSlice.actions;
export default resListSlice.reducer;
