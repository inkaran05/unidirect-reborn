// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <svg className="h-8 w-8 text-brand-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25L2 7.5L12 12.75L22 7.5L12 2.25Z"/><path d="M2 16.5L12 21.75L22 16.5V11.25L12 16.5L2 11.25V16.5Z" fillOpacity="0.5"/><path d="M20 12.375V8.25L12 12.75L4 8.25V12.375L12 17.25L20 12.375Z" /></svg>
          <span className="text-2xl font-bold text-brand-blue">UniDirect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-gray-700 font-semibold">
          <NavLink to="/search" className={({isActive}) => isActive ? "text-brand-blue" : "hover:text-brand-blue"}>Find Colleges</NavLink>
          <NavLink to="/international" className={({isActive}) => isActive ? "text-brand-blue" : "hover:text-brand-blue"}>Study Abroad</NavLink>
          <NavLink to="/stories" className={({isActive}) => isActive ? "text-brand-blue" : "hover:text-brand-blue"}>Success Stories</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-brand-blue" : "hover:text-brand-blue"}>Blog</NavLink>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="font-semibold text-gray-700 hover:text-brand-blue">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600">Logout</button>
            </>
          ) : (
            <Link to="/login" className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Login</Link>
          )}
        </div>
        
        {/* Mobile Menu Button - unchanged */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - unchanged but will include new links */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4 text-lg">
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/search" onClick={closeMenu}>Find Colleges</Link>
                <Link to="/international" onClick={closeMenu}>Study Abroad</Link>
                <Link to="/stories" onClick={closeMenu}>Success Stories</Link>
                <Link to="/blog" onClick={closeMenu}>Blog</Link>
                <div className="pt-4 border-t w-full flex flex-col items-center space-y-4">
                 {user ? ( <> <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link> <button onClick={handleLogout}>Logout</button> </>
                  ) : ( <Link to="/login" onClick={closeMenu} className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg">Login</Link> )}
                </div>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
