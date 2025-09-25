// src/pages/DashboardPage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to your Dashboard, {user?.displayName || user?.email}!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This is your personal space. Here you will soon be able to see your saved colleges, track your applications, and more.
      </p>
      <div className="mt-8">
        <Link to="/search" className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
          Start Searching for Colleges
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
