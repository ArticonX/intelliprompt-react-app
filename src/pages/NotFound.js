import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

function NotFound() {
  return (
    <>
      <Logo />
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page not found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-block px-6 py-3 bg-intellipromptOrange text-white rounded-lg hover:bg-intellipromptOrange-dark transition-colors font-medium"
      >
        Go home
      </Link>
      </div>
    </>
  );
}

export default NotFound;
