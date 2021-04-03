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

  function emptyCart() {
    dispatch(deleteCart());
  }

  if (!cartState || Object.keys(cartState).length === 0) {
    return (
      <div className="shopping-cart">
        <h2>No items in cart.</h2>
        <Link to="/">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <button className="add-to-cart" onClick={emptyCart}>Clear cart</button>

      {Object.entries(cartState).map(([itemId, amount]) => {
        const product = products.find(product => product.id === itemId);

        return (
          <Product key={product.id} product={product}>
            <ProductModifier product={product} amount={amount} removeItemButton={true} />
          </Product>
        );
      })}
    </div>
  );
}

export default ShoppingCart;