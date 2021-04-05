import React from 'react';
import { formatPrice } from '../services/shopInfo';
import './Product.scss';

function Product ({ product, children}) {
  const image = product?.image;
  const name = product?.name;
  const description = product?.description;
  const price = product?.price;

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
          <span className="price">{formatPrice(price)}</span>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Product;