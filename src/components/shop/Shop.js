import React from 'react';
import Product from './Product';
import './Shop.scss';
import products from '../../assets/mockProducts.json';

const Shop = () => {
  return (
    <div className="shop">
      {products.map(product =>
        <Product
          key={product.id}
          id={product.id}
          image={product?.image}
          name={product?.name}
          description={product?.description}
          price={product?.price}
          currency={product?.currency}
        />
      )}
    </div>
  );
}

export default Shop;