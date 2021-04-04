import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../redux/shoppingCartReducer';
import Product from '../components/Product';
import ProductModifier from '../components/ProductModifier';
import './ShoppingCart.scss';

function ShoppingCart() {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products)
  let totalprice = 0;
  let currency;

  function emptyCart() {
    dispatch(deleteCart());
  }

  if (!cartState || Object.keys(cartState).length === 0) {
    return (
      <div className="shopping-cart">
        <h2>Your cart is empty.</h2>
        <Link to="/">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart-component">
      <button className="delete-cart" onClick={emptyCart}>Clear cart</button>
      <div className="product-wrapper">
        {Object.entries(cartState).map(([itemId, amount]) => {
          const product = products.find(product => product.id === itemId);
          totalprice += product.price * amount;
          currency = product.currency;

          return (
            <Product key={product.id} product={product}>
              <ProductModifier product={product} amount={amount} removeItemButton={true} />
            </Product>
          );
        })}
      </div>
      <p className="total-price">Total Price: {totalprice} {currency}</p>
    </div>
  );
}

export default ShoppingCart;