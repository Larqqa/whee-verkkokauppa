import { configureStore } from '@reduxjs/toolkit'
import ShoppingCart from './shoppingCartReducer';

export default configureStore({
  reducer: {
    ShoppingCart: ShoppingCart,
  },
})