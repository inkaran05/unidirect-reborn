// src/pages/BlogPage.jsx
import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UniDirect Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights, admission tips, and career guidance to help you make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Top 10 Engineering Colleges in India 2024</h3>
              <p className="text-gray-600 mb-4">A comprehensive guide to the best engineering institutions...</p>
              <span className="text-brand-blue font-semibold">Read More →</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How to Choose the Right Stream After 12th</h3>
              <p className="text-gray-600 mb-4">Expert advice on selecting the perfect academic path...</p>
              <span className="text-brand-blue font-semibold">Read More →</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study Abroad on a Budget: Complete Guide</h3>
              <p className="text-gray-600 mb-4">Affordable international education options...</p>
              <span className="text-brand-blue font-semibold">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
