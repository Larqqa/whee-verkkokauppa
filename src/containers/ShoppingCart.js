import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../redux/shoppingCartReducer';
import { formatPrice, getProductById } from '../services/shopInfo';
import Product from '../components/Product';
import ProductModifier from '../components/ProductModifier';
import './ShoppingCart.scss';

function ShoppingCart() {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.ShoppingCart);
  let totalPrice = 0;

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
          const product = getProductById(itemId);
          totalPrice += product.price * amount;

          return (
            <Product key={product.id} product={product}>
              <ProductModifier product={product} amount={amount} removeItemButton={true} />
            </Product>
          );
        })}

        <p className="total-price"><span>Total Price:</span> {formatPrice(totalPrice)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;