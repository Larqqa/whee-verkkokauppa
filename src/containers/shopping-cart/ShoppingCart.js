import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../../redux/shoppingCartReducer';
import ProductModifier from '../../components/ProductModifier';
import './ShoppingCart.scss';

import Product from '../../components/Product';

function ShoppingCart() {
  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products)
  const dispatch = useDispatch()

  function emptyCart() {
    dispatch(deleteCart());
  }

  return (
    <div className="shopping-cart">
      <h1>Cart component</h1>
      {(cartState && Object.keys(cartState).length !== 0) && <button className="add-to-cart" onClick={()=>emptyCart()}>Empty cart</button>}

      {Object.entries(cartState).map(([itemId, amount]) => {
        const product = products.find(product => product.id === itemId);
        return (
          <div key={product.id}>
            <Product product={product}>
              <ProductModifier product={product} amount={amount} removeItemButton={true} />
            </Product>
          </div>
        );
     })}
    </div>
  );

}

export default ShoppingCart;