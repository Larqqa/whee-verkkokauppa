import { createSlice } from '@reduxjs/toolkit'

export const ShoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const productId = action?.payload;
      if(!productId) return;

      if (state[productId]) {
        state[productId] += 1;
      } else {
        state[productId] = 1;
      }
    },
    removeItem: (state, action) => {
      const productId = action?.payload;
      if(!productId) return;

      if (state[productId] > 1) {
        state[productId] -= 1;
      } else if(state[productId] !== null) {
        delete state[productId];
      }
    },
    setItem: (state, action) => {
      const productId = action.payload?.id;
      const amount = action.payload?.amount;
      if(!productId || !amount) return;

      if (amount < 1) {
        delete state[productId];
      } else if (state[productId]) {
        state[productId] = amount;
      }
    },
    deleteItem: (state, action) => {
      const productId = action?.payload;
      if(!productId) return;

      if(state[productId] !== null) {
        delete state[productId];
      }
    },
    deleteCart: () => {
      return {};
    },
  },
})

export const { addItem, removeItem, setItem, deleteItem, deleteCart } = ShoppingCart.actions

export default ShoppingCart.reducer