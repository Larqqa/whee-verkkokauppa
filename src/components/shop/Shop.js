import React from 'react';
import './Shop.css';
import Product from './Product';

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Shop;