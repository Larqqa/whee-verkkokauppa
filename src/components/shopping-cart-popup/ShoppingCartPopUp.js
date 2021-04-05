import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct';
import { formatPrice, getProductById } from '../../services/shopInfo';
import useOutsideClick from '../../hooks/useOutsideClick';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import close from '../../assets/icons/clear_black_24dp.svg';
import './ShoppingCartPopUp.scss';

function ShoppingCartPopUp () {
  const [ popUp, setPopUp ] = useState(false);
  const cartState = useSelector((state) => state.ShoppingCart);
  const popUpRef = useRef(null);
  const popUpButtonRef = useRef(null);
  let totalPrice = 0;

  useOutsideClick([popUpRef, popUpButtonRef], setPopUp, false);

  function toggleCartPopUp() {
    setPopUp(!popUp);
  }

  function hideCartPopUp() {
    setPopUp(false);
  }

  function GetCartAmount() {
    if (cartState && Object.keys(cartState).length) {
      const total = Object.values(cartState).reduce((sum, value) => sum + value);
      // const total = Object.keys(cartState).length;
      const cartText = `${total === 1 ? 'item' : 'items'} in cart`;
      return `${total} ${cartText}`;
    }

    return 'No items in cart';
  };

  return (
    <div className="shopping-cart-button">
      <p className="cart-info"><GetCartAmount /></p>

      <button className="cart-icon" onClick={toggleCartPopUp} ref={popUpButtonRef} aria-haspopup="true" aria-expanded={popUp}>
        <img src={cart} alt="cart" aria-hidden="true" focusable="false" />
        <span className="visually-hidden">Toggle cart pop up</span>
      </button>

      <aside className={`cart-items ${popUp ? 'show' : 'hide'}`} ref={popUpRef}>
        <div className="cart-wrapper">
          <button className="close-popup" onClick={toggleCartPopUp} >
            <img src={close} alt="close" aria-hidden="true" focusable="false" />
            <span className="visually-hidden">Close cart pop up</span>
          </button>

          {!Object.keys(cartState).length ?
            <p>Your cart is empty</p>
          :
            <>
              {Object.entries(cartState).map(([itemId, amount]) => {
                const product = getProductById(itemId);
                totalPrice += product.price * amount;

                return (
                  <CartProduct key={product.id} product={product} amount={amount} />
                );
              })}

              <div className="check-out">
                <Link to="/ostoskori" onClick={hideCartPopUp} className="check-out-link">View cart</Link>
                <p className="total-price">Total: {formatPrice(totalPrice)}</p>
              </div>
            </>
          }
        </div>
      </aside>
    </div>
  );

}

export default ShoppingCartPopUp;