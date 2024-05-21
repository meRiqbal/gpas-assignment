// src/pages/product/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useCart } from '../../context/CartContext';

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const { data: product, isLoading, isError } = useQuery(['product', id], () => fetchProduct(id as string), {
    enabled: !!id, // only run the query if id is not undefined
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching product details</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <p className="mb-2">Price: ${product.price}</p>
      <p className="mb-2">Description: {product.description}</p>
      <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
