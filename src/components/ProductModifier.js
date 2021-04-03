import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/shoppingCartReducer';
import useInput from '../hooks/useInput';
import add from '../assets/icons/add_black_24dp.svg';
import remove from '../assets/icons/remove_black_24dp.svg';
import deleteForever from '../assets/icons/delete_forever_black_24dp.svg';

import './ProductModifier.scss';

function ProductModifier ({ product, amount, removeItemButton }) {
  const id = product?.id;
  const price = product?.price;
  const currency = product?.currency;
  const { value, setValue, bind } = useInput(id, amount);
  const dispatch = useDispatch();

  function incrementProduct(id) {
    dispatch(addItem(id));
    setValue(amount + 1);
  }

  function decrenmentProduct(id) {
    dispatch(removeItem(id));
    setValue(amount - 1);
  }

  function removeProduct(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div className="product-amount">
      <button className="decrement" onClick={() => decrenmentProduct(id)}>
        {amount > 1
          ? <img src={remove} alt="remove" />
          : <img src={deleteForever} alt="delete" />
        }
      </button>

      <input type="number" value={value} {...bind} />

      <button className="increment" onClick={() => incrementProduct(id)}>
        <img src={add} alt="plus" />
      </button>

      <span className="product-price">= {price * amount} {currency}</span>

      {(removeItemButton && amount > 1) &&
        <button className="remove" onClick={() => removeProduct(id)}>
          <img src={deleteForever} alt="delete" />
        </button>
      }
    </div>
  );
}
export default ProductModifier;