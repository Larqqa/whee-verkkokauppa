import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initCart } from './redux/shoppingCartReducer';
import Routes from './Routes';
import Header from './containers/Header';
import './App.scss';

function App() {
  const [ hidden, setHidden ] = useState(true);
  const dispatch = useDispatch();

  // Initialize the cart from sessionStorage when the app is loaded
  useEffect(() => {
    dispatch(initCart());
    setHidden(false);
  }, [dispatch, setHidden])

  return (
    <div className={`app ${hidden ? 'hide' : ''}`}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
