import React from 'react';
import './ShoppingCart.scss';
import product from '../../assets/mockProducts.json';
import cart from '../../assets/mockCart.json';

function ShoppingCart() {

  function getProductById(id) {
    return product.find(x => x.id === id);
  }

  return (
    <div className="shopping-cart">
      <h1>Cart component</h1>

      {Object.entries(cart).map(([item, amount], index) => {
        const product = getProductById(item);
        return (
          <div key={product.id}>
            <div>
              <h3>{product?.name} <span>{product?.price} {product?.currency}</span></h3>
              <p>{product?.description}</p>
            </div>
            <p>amount: {amount}</p>
            <p>total: {product?.price * amount}</p>
          </div>
        );
     })}
    </div>
  );

}

export default ShoppingCart;