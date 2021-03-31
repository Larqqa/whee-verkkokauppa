import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart.js';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="logo__wrapper">
          <Link to="/" className="logo">whee</Link>
          <p>The most definitive shape store in the world</p>
        </div>
        <Cart />
      </div>
      <div className="border"> </div>
    </header>
  );
}

export default Header;