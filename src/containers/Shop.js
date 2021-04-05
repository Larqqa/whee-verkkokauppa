import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCartReducer';
import { getProducts } from '../services/shopInfo';
import Product from '../components/Product';
import './Shop.scss';

function Shop() {
  const dispatch = useDispatch()
  function addProductToCart(id) {
    dispatch(addItem(id));
  }

  return (
    <div className="shop">
      {getProducts().map( product =>
        <Product key={product.id} product={product}>
          <button className="add-to-cart" onClick={() => addProductToCart(product.id)}>Add to cart</button>
        </Product>)}
    </div>
  );
}

export default Shop;