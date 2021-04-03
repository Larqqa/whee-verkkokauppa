import React from 'react';
import ProductModifier from '../ProductModifier';
import './Product.scss';

function Product({ product, amount }) {
  const image = product?.image;
  const name = product?.name;
  const price = product?.price;
  const currency = product?.currency;

  return (
    <div className="cart-product">
      <div className="product-info">
        <img src={image} className="product-image" alt={name} />
        <p className="product-name">{name}</p>
        <p className="product-price">{price} {currency}</p>
      </div>
      <ProductModifier product={product} amount={amount} />
    </div>
  );

}

export default Product;