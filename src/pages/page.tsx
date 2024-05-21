import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NextPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
      <p>You will be redirected to the home page shortly...</p>
    </div>
  );
};

export default NextPage;
