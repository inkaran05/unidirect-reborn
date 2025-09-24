// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// A simple, self-contained Icon component for clarity and to avoid creating extra files.
const Icon = ({ name, className }) => {
  const icons = {
    search: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
    mousePointer: <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.223-2.926-5.223 2.926-3.335-1.855A2.25 2.25 0 0 0 6 6.666l.955 5.728-4.267 3.018a2.25 2.25 0 0 0-1.121 2.042l.636 5.891a2.25 2.25 0 0 0 2.224 2.013l5.89-1.121a2.25 2.25 0 0 0 2.042-1.121Z" />,
    checkCircle: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  };
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>{icons[name]}</svg>;
};

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [budget, setBudget] = useState(500000);

  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const location = event.target.location.value;
    const stream = event.target.stream.value;
    navigate(`/search?location=${location}&budget=${budget}&stream=${stream}`);
    setIsLoading(false);
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

      {/* "Get Admission in 3 Simple Steps" Section */}
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

      {/* "Why Choose UniDirect?" Section */}
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

      {/* NEW: International Admissions Section */}
      <section className="py-20" style={{backgroundColor: '#1e3a8a', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Explore International Admissions</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Study abroad with direct admission based on your Class 12th performance.</p>

          <div className="mt-12 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-8">
              <div className="mb-6">
                  <span className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Featured Partner
                  </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vilnius Tech University</h3>
              <p className="text-gray-600 mt-1">Lithuania, Europe</p>

              <div className="mt-6 text-left space-y-4">
                <p className="flex items-center text-gray-700">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Direct Admission on Class 12th Marks
                </p>
                <p className="flex items-center text-gray-700">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Globally Recognized Technical University
                </p>
                <p className="flex items-center text-gray-700">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Affordable European Education
                </p>
              </div>

              <button className="mt-8 w-full bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all">
                Learn More & Apply
              </button>
            </div>
          </div>
           <a href="#" className="mt-8 inline-block text-blue-200 hover:text-white transition">View all international options &rarr;</a>
        </div>
      </section>

      {/* "What Our Students Say" Section */}
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

      {/* Final "Ready to Find Your College?" CTA Section */}
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
