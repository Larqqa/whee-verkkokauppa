import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setItem } from '../redux/shoppingCartReducer';


function useInput(id, initialValue) {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  function setItemAmount(event) {
    const amount = parseInt(event.target.value);

    // Check isNaN to allow for empty input,
    // but don't update the cart state to it
    if (isNaN(amount)) {
      setValue(event.target.value);
    } else {
      setValue(parseInt(event.target.value));
      dispatch(setItem({
        "id": id,
        "amount": parseInt(event.target.value)
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

export default useInput;