import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../redux/shoppingCartReducer';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';
import './ShoppingCart.scss';

function ShoppingCart () {
  const [ popUp, setPopUp ] = useState(false);
  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products);
  const dispatch = useDispatch()

  const popUpRef = useRef(null);
  const popUpButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!popUpRef.current && !popUpButtonRef.current) return;
      if (!popUpRef.current.contains(e.target) && !popUpButtonRef.current.contains(e.target)) {
        // console.log('outside');
        setPopUp(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside, false);
    document.addEventListener("focusin", handleClickOutside, false);
    document.addEventListener("touchstart", handleClickOutside, false);

    // Cleanup the listeners on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
      document.removeEventListener("focusin", handleClickOutside, false);
      document.removeEventListener("touchstart", handleClickOutside, false);
    };
  }, [popUpRef, popUpButtonRef, setPopUp]);

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

  function incrementProduct(id) {
    dispatch(addItem(id));
  }

  function decrenmentProduct(id) {
    dispatch(removeItem(id));
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
          return (
            <div className="cart-product" key={itemId}>
              <div className="product-info">
                <img src={product.image} className="product-image" alt={product.name} />
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price} {product.currency}</p>
              </div>
              <div className="product-amount">
                <button className="decrement" onClick={()=>decrenmentProduct(product.id)}>{amount <= 1? 'x' : '-'}</button>
                <input value={amount} />
                <button className="increment" onClick={()=>incrementProduct(product.id)}>+</button>
                <span className="product-price">= {product.price * amount} {product.currency}</span>
              </div>
            </div>
          );
        })}
        <p>total: </p>
      </div>
    </div>
  );
}

export default ShoppingCart;