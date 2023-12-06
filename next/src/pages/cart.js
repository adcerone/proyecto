import React, { useState } from 'react';
import './cart.css';

const Cart = ({ cart }) => {
    if (!cart || cart.items.length === 0) {
      return <p>Your cart is empty.</p>;
    }
  
    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.items.map((item) => (
            <li key={item.product._id}>
              <p>Product: {item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
        <p>Total Price: ${cart.totalPrice}</p>
      </div>
    );
  };


export default Cart;
