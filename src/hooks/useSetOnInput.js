import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setItem } from '../redux/shoppingCartReducer';

function useSetOnInput(id, initialValue) {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  function setItemAmount(event) {
    const amount = parseInt(event.target.value);

    // Check isNaN to allow for empty input,
    // but don't update the cart state to it
    if (isNaN(amount)) {
      setValue(event.target.value);
    } else if (amount < 1000) {
      setValue(amount);
      dispatch(setItem({
        "id": id,
        "amount": amount
      }));
    }
  }

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: setItemAmount,
    }
  };
};

export default useSetOnInput;