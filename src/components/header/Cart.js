import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/shopping_cart_black_24dp.svg';
import './Cart.scss';

const Cart = (props) => {
  return (
    <div className="shopping-cart">
      <Link to="/ostoskori">
        <img src={cart} className="cart" alt="cart" />
      </Link>
    </div>
  );
}

export default Cart;