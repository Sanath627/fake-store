// src/App.js

import React from 'react';
import './App.css';
import ProductList from './components/productList';

function App() {
  return (
    <div className="App">
      <h1>🛒 Fake Store</h1>
      <ProductList />
    </div>
  );
}

export default App;
