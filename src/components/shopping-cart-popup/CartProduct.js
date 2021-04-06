import React from 'react';
import { formatPrice } from '../../services/shopInfo';
import ProductModifier from '../ProductModifier';
import './CartProduct.scss';

function CartProduct({ product, amount }) {
  const image = product?.image;
  const alt = product?.alt;
  const name = product?.name;
  const price = product?.price;

  return (
    <div className="cart-product">
      <figure className="product-image">
        <img src={image} alt={alt} />
      </figure>

      <div className="product-info">
        <p className="product-name"><strong>{name}</strong></p>
        <span className="product-price">{formatPrice(price)}</span>
        <ProductModifier product={product} amount={amount} />
      </div>
    </div>
  );

}

export default CartProduct;