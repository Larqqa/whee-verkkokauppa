import { configureStore } from '@reduxjs/toolkit'
import ShoppingCart from './reducer';

export default configureStore({
  reducer: {
    ShoppingCart: ShoppingCart
  },
})