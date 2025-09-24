// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">Learn more about UniDirect.</p>
          </div>
          {/* About content will go here */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
