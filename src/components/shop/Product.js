import React from 'react';
import './Product.scss';

import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/reducer';

function Product ({ product }) {
  const dispatch = useDispatch()

  function addProductToCart(id) {
    dispatch(addItem(id));
  }

  const id = product?.id;
  const image = product?.image;
  const name = product?.name;
  const description = product?.description;
  const price = product?.price;
  const currency = product?.currency;

  return (
    <div className="product">
      <div className="image">
        <img src={image} alt="Productimage"/>
      </div>
      <div className="product-data">
        <div className="description-wrapper">
          <h3 className="name">{name}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="price-wrapper">
          <span className="price">{price} {currency}</span>
          <button className="add-to-cart" onClick={()=>addProductToCart(id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;