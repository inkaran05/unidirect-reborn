// src/pages/SuccessStoriesPage.jsx
import React from 'react';

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read inspiring stories from students who found their perfect college match through UniDirect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder story cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">From Small Town to Big Dreams</h3>
            <p className="text-gray-600 mb-4">How Priya found her dream engineering college...</p>
            <span className="text-brand-blue font-semibold">Read More →</span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">International Success Story</h3>
            <p className="text-gray-600 mb-4">Rohan's journey to studying abroad...</p>
            <span className="text-brand-blue font-semibold">Read More →</span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Budget-Friendly Victory</h3>
            <p className="text-gray-600 mb-4">How Anjali found quality education within budget...</p>
            <span className="text-brand-blue font-semibold">Read More →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
