import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollDetector from '../hooks/useScrollDetector';
import ShoppingCartPopUp from '../components/shopping-cart-popup/ShoppingCartPopUp.js';
import './Header.scss';

function Header() {
  const [ fixed, setFixed ] = useState(false);
  const header = useRef(null);
  useScrollDetector(header, setFixed, true);

  return (
    <header className="main-header" ref={header}>

      <div className={`fixed-header ${fixed ? 'show' : 'hide'}`}>
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <Link to="/"><h1 className="logo">whee</h1></Link>
          </div>
          <ShoppingCartPopUp />
        </div>

        <div className="border"> </div>
      </div>

      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link to="/"><h1 className="logo">whee</h1></Link>
          <p className="slogan">The most definitive shape store in the world</p>
        </div>
        <ShoppingCartPopUp />
      </div>

      <div className="border"> </div>
    </header>
  );
}

export default Header;