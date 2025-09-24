// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Import useAuth

const Header = () => {
  const { user, logout } = useAuth(); // 2. Get user and logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <svg className="h-8 w-8 text-brand-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25L2 7.5L12 12.75L22 7.5L12 2.25Z"/><path d="M2 16.5L12 21.75L22 16.5V11.25L12 16.5L2 11.25V16.5Z" fillOpacity="0.5"/><path d="M20 12.375V8.25L12 12.75L4 8.25V12.375L12 17.25L20 12.375Z" /></svg>
          <span className="text-2xl font-bold text-brand-blue">UniDirect</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <Link to="/search" className="hover:text-brand-blue transition-colors">Find Colleges</Link>
          <Link to="/international" className="hover:text-brand-blue transition-colors">International</Link>
          <Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
        </nav>
        
        {/* 3. This is our new dynamic section */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            // If user is logged in, show Dashboard and Logout
            <>
              <Link to="/dashboard" className="font-semibold text-gray-700 hover:text-brand-blue">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-all">
                Logout
              </button>
            </>
          ) : (
            // If user is logged out, show Login
            <Link to="/login" className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
