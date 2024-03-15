import React, { useState, useCallback } from 'react';
import './style.css';

function App() {
  const [cart, setCart] = useState([]);

  // Define a callback function to add items to the cart
  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className="App">
      <h1>E-commerce Project</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
