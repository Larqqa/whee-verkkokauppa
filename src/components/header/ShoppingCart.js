import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './ShoppingCart.scss';

function ShoppingCart () {
  const [ popUp, setPopUp ] = useState(false);

  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products)

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

  function targetLost() {
    setPopUp(false);
  }

  return (
    <div className="shopping-cart-button">
      <p className="cart-info">{getCartAmount()}</p>
      <button className="cart-icon" onClick={toggleCartPopUp}><img src={cart} alt="cart" /></button>

      <div className={`close-target ${!popUp && 'hidden'}`} onClick={targetLost}></div>

      <div className={`cart-items ${!popUp && 'hidden'}`}>
        <Link to="/ostoskori" onClick={targetLost}>Go to cart</Link>
        {Object.entries(cartState).map(([itemId, amount]) => {
          const product = products.find(product => product.id === itemId);
          return (
            <p>{product.name} {amount}</p>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;