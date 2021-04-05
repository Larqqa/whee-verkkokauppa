import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/shoppingCartReducer';
import { formatPrice } from '../services/shopInfo';
import useSetOnInput from '../hooks/useSetOnInput';
import add from '../assets/icons/add_black_24dp.svg';
import remove from '../assets/icons/remove_black_24dp.svg';
import deleteForever from '../assets/icons/delete_forever_black_24dp.svg';
import './ProductModifier.scss';

function ProductModifier ({ product, amount, removeItemButton }) {
  const dispatch = useDispatch();
  const id = product?.id;
  const price = product?.price;
  const hasDeleteButton = removeItemButton && amount > 1;

  const { setValue, bind } = useSetOnInput(id, amount);

  // Update the input value when the redux store is updated
  useEffect(()=> {
    setValue(amount);
  }, [setValue, amount])

  function incrementProduct(id) {
    dispatch(addItem(id));
  }

  function decrenmentProduct(id) {
    dispatch(removeItem(id));
  }

  function removeProduct(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div className="product-amount">
      <div className={`product-modifiers ${hasDeleteButton ? 'has-delete-button' : ''}`}>
        {(hasDeleteButton || amount < 2) &&
          <button className="remove" onClick={() => removeProduct(id)}>
            <img src={deleteForever} alt="remove" aria-hidden="true" focusable="false" />
            <span className="visually-hidden">Remove product from cart</span>
          </button>}

        {amount > 1 &&
          <button className="decrement" onClick={() => decrenmentProduct(id)}>
            <img src={remove} alt="decrement" aria-hidden="true" focusable="false" />
            <span className="visually-hidden">Decrement product amount</span>
          </button>}

        <input type="number" {...bind} />

        <button className="increment" onClick={() => incrementProduct(id)}>
          <img src={add} alt="increment" aria-hidden="true" focusable="false" />
          <span className="visually-hidden">Increment product amount</span>
        </button>
      </div>

      <span className="equals" aria-hidden="true">=</span>
      <span className="product-total">{formatPrice(price * amount)}</span>
    </div>
  );
}
export default ProductModifier;