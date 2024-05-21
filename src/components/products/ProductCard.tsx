// src/components/products/ProductCard.tsx
import React from 'react';
import Link from 'next/link';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <div>
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <Link href={`/product/${product.id}`} passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded inline-block">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
