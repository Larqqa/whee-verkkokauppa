import React from 'react';
import ShoppingCartComponent from '../containers/shopping-cart/ShoppingCart';
import './ShoppingCart.scss';

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <ShoppingCartComponent />
    </div>
  );
}

export default ShoppingCart;