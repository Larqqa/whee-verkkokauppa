import { createSlice } from '@reduxjs/toolkit'

export const ShoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState: {},
  reducers: {
    addItem: (state, item) => {
      if (state[item.payload]) {
        state[item.payload] += 1;
      } else {
        state[item.payload] = 1;
      }
    },
    removeItem: (state, item) => {
      if (state[item.payload] > 1) {
        state[item.payload] -= 1;
      } else if(state[item.payload] !== null) {
        delete state[item.payload];
      }
    },
    deleteItem: (state, item) => {
      if(state[item.payload] !== null) {
        delete state[item.payload];
      }
    },
    deleteCart: (state) => {
      return {};
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, deleteItem, deleteCart } = ShoppingCart.actions

export default ShoppingCart.reducer