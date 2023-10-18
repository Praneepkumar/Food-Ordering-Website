import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItems(state, action) {
      const existingSubMenu = state.items.find(
        (item) => item.id === action.payload.id,
      );
      state.items.push({
        ...action.payload,
        quantity: existingSubMenu
          ? existingSubMenu.quantity + 1
          : existingSubMenu.quantity,
      });
    },
    removeItems(state, action) {
      console.log(state.items, action);
      state.items.splice(action.payload, 1);
    },
    clearCart(state) {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
