// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where the different pages will be rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
