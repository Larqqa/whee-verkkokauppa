import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, deleteItem, deleteCart } from '../../redux/shoppingCartReducer';
import './ShoppingCart.scss';

function ShoppingCart() {
  const cartState = useSelector((state) => state.ShoppingCart);
  const products = useSelector((state) => state.Products)
  const dispatch = useDispatch()

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
      {(cartState && Object.keys(cartState).length !== 0) && <button className="add-to-cart" onClick={()=>emptyCart()}>Empty cart</button>}

      {Object.entries(cartState).map(([itemId, amount]) => {
        const product = products.find(product => product.id === itemId);
        return (
          <div key={product.id}>
            <div>
              <img src={product.image} className="product-image" alt={product.name} />
              <h3>{product?.name} <span>{product?.price} {product?.currency}</span></h3>
              <p>{product?.description}</p>
            </div>

            <p>amount: <input value={amount} /></p>
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