// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollegeCard from '../components/CollegeCard'; // We will reuse our card
import { colleges } from '../mock-data'; // We'll show some featured colleges

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const budget = event.target.budget.value;
    const stream = event.target.stream.value;
    navigate(`/search?location=${location}&budget=${budget}&stream=${stream}`);
  };

  const featuredColleges = colleges.slice(0, 3); // Get first 3 colleges to feature

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Start Your Journey to the Perfect College!
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Search, compare, and apply to top colleges across India based on what matters most to you.
          </p>
          <div className="mt-10 max-w-4xl mx-auto">
            {/* Search form is unchanged */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white p-6 rounded-2xl shadow-xl">
               <div className="text-left md:col-span-1">
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                <select id="stream" name="stream" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition">
                  <option value="">All</option><option>Science</option><option>Commerce</option><option>Arts</option>
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

      {/* NEW: Explore Top Streams Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Top Streams</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="font-bold text-lg text-gray-800">Engineering</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="font-bold text-lg text-gray-800">Management</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="font-bold text-lg text-gray-800">Commerce</h3>
            </div>
             <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="font-bold text-lg text-gray-800">Arts & Science</h3>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Featured Colleges Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Colleges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredColleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/search')} className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all">
              View All Colleges
            </button>
          </div>
        </div>
      </section>

      {/* NEW: Stats Bar Section */}
       <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-yellow-400">500+</p>
              <p className="mt-2 text-lg text-blue-200">Verified Colleges</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-yellow-400">10,000+</p>
              <p className="mt-2 text-lg text-blue-200">Students Counseled</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-yellow-400">95%</p>
              <p className="mt-2 text-lg text-blue-200">Admission Success Rate</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
