// src/pages/InternationalPage.jsx
import React from 'react';

const InternationalPage = () => {
  // This inline style replicates the dark blue patterned background from your original design
  const sectionStyle = {
    backgroundColor: '#1e3a8a',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  const CheckmarkIcon = () => (
    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <section style={sectionStyle} className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Explore International Admissions</h2>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Study abroad with direct admission based on your Class 12th performance.</p>

        <div className="mt-12 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="p-8">
            <div className="mb-6">
                <span className="inline-block bg-brand-blue-dark text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Featured Partner
                </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Vilnius Tech University</h3>
            <p className="text-gray-600 mt-1">Lithuania, Europe</p>

            <div className="mt-6 text-left space-y-4">
              <p className="flex items-center text-gray-700"><CheckmarkIcon /> Direct Admission on Class 12th Marks</p>
              <p className="flex items-center text-gray-700"><CheckmarkIcon /> Globally Recognized Technical University</p>
              <p className="flex items-center text-gray-700"><CheckmarkIcon /> Affordable European Education</p>
            </div>

            <button className="mt-8 w-full bg-brand-yellow text-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all">
              Learn More & Apply
            </button>
          </div>
        </div>
         <a href="#" className="mt-8 inline-block text-blue-200 hover:text-white transition">View all international options &rarr;</a>
      </div>
    </section>
  );
};

export default InternationalPage;
