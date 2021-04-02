import React from 'react';
import Routes from './Routes';
import Header from './components/header/Header';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
