import React from 'react';
import ShoppingCartComponent from '../components/shopping-cart/ShoppingCart';
import './ShoppingCart.scss';

function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      <ShoppingCartComponent />
    </div>
  );
}

export default ShoppingCart;