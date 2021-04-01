import React from 'react';
import Product from './Product';
import './Shop.scss';
import products from '../../assets/mockProducts.json';

function Shop() {
  return (
    <div className="shop">
      { products.map( product => <Product product={product} /> ) }
    </div>
  );
}

export default Shop;