import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollOverBottomDetector from '../hooks/useScrollOverBottomDetector';
import ShoppingCartPopUp from '../components/shopping-cart-popup/ShoppingCartPopUp.js';
import './Header.scss';

function Header() {
  const [ fixed, setFixed ] = useState(false);
  const [ offset, setOffset ] = useState(false);
  const header = useRef(null);
  const headerPlaceholder = useRef(null);

  // Get the header height on mount
  useEffect(() => {
    if (!fixed && header) {
      setOffset(header.current.offsetHeight)
    }
  },[fixed, header, setOffset]);

  useScrollOverBottomDetector(headerPlaceholder, setFixed, true);

  const placeholderStyle = {
    height: `${offset}px`,
    position: fixed ? 'relative' : 'absolute'
  };

  return (
    <>
    <div style={placeholderStyle} ref={headerPlaceholder} />
    <header className={fixed ? 'fixed-header' : 'main-header'} ref={header}>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <h1 className="logo">whee</h1>
          </Link>
          <p className="slogan">The most definitive shape store in the world</p>
        </div>

        <ShoppingCartPopUp />
      </div>

      <div className="border" />
    </header>
    </>
  );
}

export default Header;