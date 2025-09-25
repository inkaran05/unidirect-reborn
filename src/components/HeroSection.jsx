// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const stream = event.target.stream.value;
    navigate(`/search?location=${location}&stream=${stream}`);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline and Search Form */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Navigate Your Next Career Move
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Explore advanced degrees and specialized courses designed to propel your career forward.
          </p>
          <div className="mt-8 max-w-lg mx-auto lg:mx-0 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border">
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="text-left">
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">Select your domain</label>
                <select id="stream" name="stream" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue">
                  <option value="">All Streams</option><option>Engineering</option><option>Management</option><option>Commerce</option>
                </select>
              </div>
              <div className="text-left">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" id="location" name="location" placeholder="e.g., Patna" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue" />
              </div>
              <div className="sm:mt-6">
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700">
                  Explore Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Enhanced Visual */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full h-full min-h-[500px] bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-brand-blue">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-brand-blue to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-brand-blue/30 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 animate-fade-in">Empowering Your Journey</h3>
                <p className="text-base opacity-80 animate-fade-in" style={{ animationDelay: '0.5s' }}>Building brighter futures, one step at a time</p>
              </div>
            </div>
            {/* Floating elements for animation */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-5 h-5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
