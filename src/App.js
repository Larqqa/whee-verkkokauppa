import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initCart } from './redux/shoppingCartReducer';
import Routes from './Routes';
import Header from './containers/Header';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  // Initialize the cart from sessionStorage when the app is loaded
  useEffect(() => {
    dispatch(initCart());
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
