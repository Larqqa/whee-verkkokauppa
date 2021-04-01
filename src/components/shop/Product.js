import React from 'react';
import './Product.scss';

const Product = ({ id, image, name, description, price, currency}) => {
  function clickHandler(e) {
    console.log(e.targett);
  }

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
          <button className="add-to-cart" onClick={clickHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;