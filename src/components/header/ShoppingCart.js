import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './ShoppingCart.scss';

function ShoppingCart (props) {
  function getCartAmount() {
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