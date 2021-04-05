import React from 'react';
import { formatPrice } from '../services/shopInfo';
import './Product.scss';

function Product ({ product, children}) {
  const image = product?.image;
  const alt = product?.alt;
  const name = product?.name;
  const description = product?.description;
  const price = product?.price;

  return (
    <article className="product">
      <figure className="image">
        <img src={image} alt={alt} />
      </figure>

      <div className="product-data">
        <div className="description-wrapper">
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
        </div>

        <div className="price-wrapper">
          <span className="price">{formatPrice(price)}</span>
          {children}
        </div>
      </div>
    </article>
  );
}

export default Product;