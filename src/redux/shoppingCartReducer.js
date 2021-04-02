import { createSlice } from '@reduxjs/toolkit'

export const ShoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      if (state[action.payload]) {
        state[action.payload] += 1;
      } else {
        state[action.payload] = 1;
      }
    },
    removeItem: (state, action) => {
      if (state[action.payload] > 1) {
        state[action.payload] -= 1;
      } else if(state[action.payload] !== null) {
        delete state[action.payload];
      }
    },
    deleteItem: (state, action) => {
      if(state[action.payload] !== null) {
        delete state[action.payload];
      }
    },
    deleteCart: () => {
      return {};
    },
  },
})

export const { addItem, removeItem, deleteItem, deleteCart } = ShoppingCart.actions

export default ShoppingCart.reducer