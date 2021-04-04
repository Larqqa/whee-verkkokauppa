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
  const hasDeleteButton = removeItemButton && amount > 1;

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

  const Del = () => {
    return (<button className="remove" onClick={() => removeProduct(id)}>
      <img src={deleteForever} alt="delete" />
    </button>);
  }

  return (
    <div className={`product-amount ${hasDeleteButton ? 'has-delete-button' : ''}`}>
      {amount < 2 &&
        <button className="remove" onClick={() => removeProduct(id)}>
          <img src={deleteForever} alt="delete" />
        </button>}

      {amount > 1 &&
        <button className="decrement" onClick={() => decrenmentProduct(id)}>
          <img src={remove} alt="minus" />
        </button>}

      <input type="number" {...bind} />

      <button className="increment" onClick={() => incrementProduct(id)}>
        <img src={add} alt="plus" />
      </button>

      {hasDeleteButton &&
        <button className="remove" onClick={() => removeProduct(id)}>
          <img src={deleteForever} alt="delete" />
        </button>}

      <span className="equals">=</span>
      <span className="product-total">{price * amount} {currency}</span>
    </div>
  );
}
export default ProductModifier;