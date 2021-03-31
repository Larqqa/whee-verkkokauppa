import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/shopping_cart_black_24dp.svg';

const Cart = (props) => {
  return (
    <Link to="/ostoskori">
      <img src={cart} className="cart" alt="cart" />
    </Link>
  );
}

export default Cart;