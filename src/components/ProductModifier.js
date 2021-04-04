import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/shoppingCartReducer';
import useInput from '../hooks/useInput';
import add from '../assets/icons/add_black_24dp.svg';
import remove from '../assets/icons/remove_black_24dp.svg';
import deleteForever from '../assets/icons/delete_forever_black_24dp.svg';

import './ProductModifier.scss';

function ProductModifier ({ product, amount, removeItemButton }) {
  const dispatch = useDispatch();
  const id = product?.id;
  const price = product?.price;
  const currency = product?.currency;
  const { setValue, bind } = useInput(id, amount);

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

  function RemoveItemButton() {
    if (removeItemButton && amount > 1) {
      return (
        <button className="remove" onClick={() => removeProduct(id)}>
          <img src={deleteForever} alt="delete" />
        </button>
      );
    }

    return false;
  }

  return (
    <div className="product-amount">
      <button className="decrement" onClick={() => decrenmentProduct(id)}>
        {amount > 1
          ? <img src={remove} alt="remove" />
          : <img src={deleteForever} alt="delete" />
        }
      </button>

      <input type="number" {...bind} />

      <button className="increment" onClick={() => incrementProduct(id)}>
        <img src={add} alt="plus" />
      </button>
      <span className="equals">=</span>
      <span class="product-total">{price * amount} {currency}</span>

      <RemoveItemButton />
    </div>
  );
}
export default ProductModifier;