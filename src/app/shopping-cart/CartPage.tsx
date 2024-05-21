// src/Cart/CartPage.tsx
import React, { useState } from 'react';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const placeOrder = () => {
    console.log('Order placed:', cartItems);
    setCartItems([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>{item.title}</div>
              <div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => addToCart(item)}>Add more</button>
              </div>
            </div>
          ))}
          <button onClick={placeOrder} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
