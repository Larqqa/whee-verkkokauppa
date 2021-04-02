import React from 'react';
import './ShoppingCart.scss';
import product from '../../assets/mockProducts.json';

import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, deleteItem, deleteCart } from '../../redux/reducer';

function ShoppingCart() {
  const count = useSelector((state) => state.ShoppingCart)
  const dispatch = useDispatch()

  function getProductById(id) {
    return product.find(x => x.id === id);
  }

  function incrementProduct(id) {
    dispatch(addItem(id));
  }

  function decrenmentProduct(id) {
    dispatch(removeItem(id));
  }

  function removeProduct(id) {
    dispatch(deleteItem(id));
  }

  function emptyCart() {
    dispatch(deleteCart());
  }

  return (
    <div className="shopping-cart">
      <h1>Cart component</h1>
      {(count && Object.keys(count).length) && <button className="add-to-cart" onClick={()=>emptyCart()}>Empty cart</button>}

      {Object.entries(count).map(([item, amount], index) => {
        const product = getProductById(item);
        return (
          <div key={product.id}>
            <div>
              <h3>{product?.name} <span>{product?.price} {product?.currency}</span></h3>
              <p>{product?.description}</p>
            </div>
            <p>amount: {amount}</p>
            <p>total: {product?.price * amount}</p>
          <button className="add-to-cart" onClick={()=>incrementProduct(product.id)}>+</button>
          <button className="add-to-cart" onClick={()=>decrenmentProduct(product.id)}>-</button>
          <button className="add-to-cart" onClick={()=>removeProduct(product.id)}>x</button>
          </div>
        );
     })}
    </div>
  );

}

export default ShoppingCart;