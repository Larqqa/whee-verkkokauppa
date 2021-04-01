import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './Cart.scss';

const Cart = (props) => {
  return (
    <div className="shopping-cart">
      <p className="cart-info">No items in cart</p>
      <Link to="/ostoskori" className="cart-icon">
        <img src={cart} alt="cart" />
      </Link>
    </div>
  );
}

export default Cart;