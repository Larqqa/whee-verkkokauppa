import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartPopUp from '../components/shopping-cart-popup/ShoppingCartPopUp.js';
import './Header.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link to="/" className="logo">whee</Link>
          <p className="slogan">The most definitive shape store in the world</p>
        </div>
        <ShoppingCartPopUp />
      </div>
      <div className="border"> </div>
    </header>
  );
}

export default Header;