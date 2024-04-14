import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        name: "69 Sắc Thái - Giải Phẫu Học Nghệ Thuật",
        price: 200000,
        quantity: 1,
        total: 200000,
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    unincreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.price;
    },
  },
});

export const { addProduct, deleteItem, unincreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
