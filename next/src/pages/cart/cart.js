import React, { useEffect, useState } from 'react';
import './cart.css';

const Cart = () => {
  const [storedCart, setStoredCart] = useState([]);

  useEffect(() => {
    // Check if window is defined before using localStorage
    if (typeof window !== 'undefined') {
      // Retrieve cart content from local storage
      const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
      setStoredCart(cartFromLocalStorage);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  if (!storedCart || storedCart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {storedCart.map((item) => (
          <li key={item.productId}>
            <p>Product: {item.productName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>total:   </p>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Cart;
