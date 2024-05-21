// src/pages/cart.tsx

import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, addToCart } = useCart();

  const handlePlaceOrder = () => {
    // Logic to place the order
    alert('Your order has been placed!');
    // Assuming you want to clear the cart after placing the order
    // You can add additional logic here to handle the order placement
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4">
                <div>{item.name}</div>
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2" /> {/* Display image */}
                <div>${item.price}</div>
                <div>Quantity: {item.quantity}</div>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handlePlaceOrder} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Place Order</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
