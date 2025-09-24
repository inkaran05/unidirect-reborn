// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon'; // Import our new Icon component

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const budget = event.target.budget.value;
    const stream = event.target.stream.value;
    navigate(`/search?location=${location}&budget=${budget}&stream=${stream}`);
  };

  return (
    <main>
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
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="text-left md:col-span-1">
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                <select id="stream" name="stream" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition">
                  <option value="">All</option>
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                </select>
              </div>
              <div className="md:col-span-2 text-left">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Annual Budget</label>
                <input id="budget" name="budget" type="range" min="50000" max="500000" step="10000" defaultValue="500000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div className="text-left md:col-span-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" id="location" name="location" placeholder="e.g., Patna" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" />
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

      {/* NEW: How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Admission in 3 Simple Steps</h2>
            <p className="mt-4 text-lg text-gray-600">Your clear path from search to admission.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-100 text-brand-blue rounded-full mb-6">
                <Icon name="search" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search & Filter</h3>
              <p className="text-gray-600">Enter your stream, budget, and preferred location to find matching colleges instantly.</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-100 text-brand-blue rounded-full mb-6">
                <Icon name="mousePointer" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Explore Colleges</h3>
              <p className="text-gray-600">Get a curated list of colleges with details on courses, fees, and placement support.</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-100 text-brand-blue rounded-full mb-6">
                <Icon name="checkCircle" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Free Guidance</h3>
              <p className="text-gray-600">Our experts help you with the application process, often for free, ensuring a smooth admission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Us Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose UniDirect?</h2>
                <p className="mt-4 text-lg text-gray-600">The smartest way to find your future college.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md"><h3 className="text-lg font-bold mb-2 text-brand-blue">Budget-First Search</h3><p>Find high-quality colleges you can actually afford without financial stress.</p></div>
                <div className="bg-white p-8 rounded-xl shadow-md"><h3 className="text-lg font-bold mb-2 text-brand-blue">All Streams Covered</h3><p>Whether from Science, Commerce, Arts, or Vocational, we have options for you.</p></div>
                <div className="bg-white p-8 rounded-xl shadow-md"><h3 className="text-lg font-bold mb-2 text-brand-blue">Zero/Low Cost Support</h3><p>Our guidance is free for partnered colleges and low-cost for others. No hidden fees.</p></div>
                <div className="bg-white p-8 rounded-xl shadow-md"><h3 className="text-lg font-bold mb-2 text-brand-blue">Verified Institutions</h3><p>We only list verified and reputable institutions to ensure you get a quality education.</p></div>
            </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic">"UniDirect made the impossible possible. I found a great engineering college within my budget, something I struggled with for months!"</p>
              <div className="mt-4"><p className="font-semibold text-gray-900">Anjali Kumari</p><p className="text-sm text-gray-500">B.Tech Student, Patna</p></div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic">"As a commerce student, I was overwhelmed. The guidance from the UniDirect team was free and incredibly helpful. Highly recommended!"</p>
              <div className="mt-4"><p className="font-semibold text-gray-900">Rohan Sharma</p><p className="text-sm text-gray-500">BBA Student, Delhi</p></div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
               <p className="text-gray-700 italic">"I never thought I could study abroad until I found the international section. They guided me through the whole process."</p>
               <div className="mt-4"><p className="font-semibold text-gray-900">Priya Singh</p><p className="text-sm text-gray-500">Applicant, Vilnius Tech</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Final CTA Section */}
      <section className="bg-brand-blue">
        <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Find Your College?</h2>
            <p className="mt-2 text-blue-200 max-w-xl mx-auto">Create an account to save searches and get personalized support from our experts.</p>
            <button onClick={() => navigate('/login')} className="mt-8 inline-block bg-white text-brand-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                Get Started for Free
            </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
