import React from 'react';
import Shop from '../components/shop/Shop';
import './Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Shop />
    </div>
  );
}

export default Home;