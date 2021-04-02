import product from '../assets/mockProducts.json';
import { createSlice } from '@reduxjs/toolkit'

export const Products = createSlice({
  name: 'Products',
  initialState: product,
  reducers: {
  },
})

export const { } = Products.actions

export default Products.reducer