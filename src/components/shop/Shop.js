import React from 'react';
import { useSelector } from 'react-redux'
import Product from './Product';
import './Shop.scss';

function Shop() {
  const products = useSelector((state) => state.Products)

  return (
    <div className="shop">
      {products.map( product => <Product key={product.id} product={product} /> )}
    </div>
  );
}

export default Shop;