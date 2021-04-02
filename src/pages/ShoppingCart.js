import React from 'react';
import ShoppingCartComponent from '../components/shopping-cart/ShoppingCart';
import './ShoppingCart.scss';

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <ShoppingCartComponent />
    </div>
  );
}

export default ShoppingCart;