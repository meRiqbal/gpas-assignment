// src/pages/index.tsx
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductList from '../components/products/ProductList';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const { data: products, isLoading, isError } = useQuery('products', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const filteredProducts = products?.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
          <div className="text-3xl font-semibold cursor-pointer text-blue-500">Home</div>
        </Link>
        <Link href="/cart" passHref>
          <div className="text-3xl font-semibold cursor-pointer text-blue-500">Cart</div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/login" passHref>
            <div className="text-3xl font-semibold cursor-pointer text-blue-500">Login</div>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Search
        </button>
      </form>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
