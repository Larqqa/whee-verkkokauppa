import React from 'react';
import { formatPrice } from '../../services/shopInfo';
import ProductModifier from '../ProductModifier';
import './CartProduct.scss';

function CartProduct({ product, amount }) {
  const image = product?.image;
  const name = product?.name;
  const price = product?.price;
  const currency = product?.currency;

  return (
    <div className="cart-product">
      <img src={image} className="product-image" alt={name} />
      <div className="product-info">
        <p className="product-name"><strong>{name}</strong></p>
        <span className="product-price">{formatPrice(price)}</span>
      </div>
      <ProductModifier product={product} amount={amount} />
    </div>
  );

}

export default CartProduct;