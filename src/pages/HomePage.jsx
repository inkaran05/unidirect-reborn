// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Start Your Journey to the Perfect College!
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Select your stream, budget, and location to discover colleges across India.
          </p>
          <div className="mt-12 max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl">
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="text-left md:col-span-1">
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                <select id="stream" name="stream" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition">
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Vocational</option>
                </select>
              </div>
              <div className="md:col-span-2 text-left">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Annual Budget</label>
                <input id="budget" name="budget" type="range" min="25000" max="1000000" step="5000" defaultValue="150000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div className="text-left md:col-span-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" id="location" name="location" placeholder="e.g., Patna, Bihar" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" />
              </div>
              <div className="md:col-span-1">
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Admission in 3 Simple Steps</h2>
            <p className="mt-4 text-lg text-gray-600">Your clear path from search to admission.</p>
          </div>
          {/* Steps content will go here */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose UniDirect?</h2>
            <p className="mt-4 text-lg text-gray-600">The smartest way to find your future college.</p>
          </div>
          {/* Features content will go here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
