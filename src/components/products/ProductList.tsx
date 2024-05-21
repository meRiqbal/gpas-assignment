// src/components/products/ProductList.tsx

import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="mb-2">${product.price}</p>
          <Link href={`/product/${product.id}`} passHref>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">View Details</button>
          </Link>
          <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
