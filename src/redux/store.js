import { configureStore } from '@reduxjs/toolkit'
import ShoppingCart from './shoppingCartReducer';
import Products from './productsReducer';

export default configureStore({
  reducer: {
    ShoppingCart: ShoppingCart,
    Products: Products,
  },
})