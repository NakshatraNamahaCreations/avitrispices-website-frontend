import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => String(item._id) === String(action.payload._id || action.payload.id));
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ 
          ...action.payload, 
          _id: String(action.payload._id || action.payload.id), // ✅ Ensure `_id` is stored
          quantity: 1 
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => String(item._id) !== String(action.payload));
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(item => String(item._id) === String(action.payload._id || action.payload.id));
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
