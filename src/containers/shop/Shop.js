import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../redux/shoppingCartReducer';
import Product from '../../components/Product';
import './Shop.scss';

function Shop() {
  const products = useSelector((state) => state.Products)
  const dispatch = useDispatch()

  function addProductToCart(id) {
    dispatch(addItem(id));
  }

  return (
    <div className="shop">
      {products.map( product =>
        <Product key={product.id} product={product}>
          <button className="add-to-cart" onClick={() => addProductToCart(product.id)}>Add to cart</button>
        </Product>)}
    </div>
  );
}

export default Shop;