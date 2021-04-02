import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './ShoppingCart.scss';

import { useSelector } from 'react-redux'

function ShoppingCart (props) {
  const count = useSelector((state) => state.ShoppingCart)

  function getCartAmount() {
    if (count && Object.keys(count).length) {
      const total = Object.values(count).reduce((sum, value) => sum + value);
      return `${total} items in cart`;
    }

    return 'No items in cart';
  }

  return (
    <div className="shopping-cart-button">
      <p className="cart-info">{getCartAmount()}</p>
      <Link to="/ostoskori" className="cart-icon">
        <img src={cart} alt="cart" />
      </Link>
    </div>
  );
}

export default ShoppingCart;