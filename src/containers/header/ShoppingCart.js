import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Product from './Product';
import useOutsideClick from '../../hooks/useOutsideClick';

import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './ShoppingCart.scss';

function ShoppingCart () {
  const [ popUp, setPopUp ] = useState(false);
  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products);
  const popUpRef = useRef(null);
  const popUpButtonRef = useRef(null);
  let totalPrice = 0;
  let currency;

  useOutsideClick([popUpRef, popUpButtonRef], setPopUp, false);

  function getCartAmount() {
    if (cartState && Object.keys(cartState).length) {
      const total = Object.values(cartState).reduce((sum, value) => sum + value);
      return `${total} items in cart`;
    }

    return 'No items in cart';
  }

  function toggleCartPopUp() {
    setPopUp(!popUp);
  }

  function hideCartPopUp() {
    setPopUp(false);
  }

  return (
    <div className="shopping-cart-button">
      <p className="cart-info">{getCartAmount()}</p>
      <button className="cart-icon" onClick={toggleCartPopUp} ref={popUpButtonRef}>
        <img src={cart} alt="cart" />
      </button>

      <div className={`cart-items ${popUp ? '' : 'hide'}`} ref={popUpRef}>
        <Link to="/ostoskori" onClick={hideCartPopUp}>Go to cart</Link>
        {Object.entries(cartState).map(([itemId, amount]) => {
          const product = products.find(product => product.id === itemId);
          totalPrice += product.price * amount;
          currency = product.currency;

          return (
            <Product key={product.id} product={product} amount={amount} />
          );
        })}
        <p>Total price: {totalPrice} {currency}</p>
      </div>
    </div>
  );

}

export default ShoppingCart;