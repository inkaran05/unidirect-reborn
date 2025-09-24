// src/pages/CollegeDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { colleges } from '../mock-data';

const CollegeDetailPage = () => {
  // 1. Get the collegeId from the URL (e.g., /college/3)
  const { collegeId } = useParams();
  
  // 2. Find the correct college from our mock data
  const college = colleges.find(c => c.id === parseInt(collegeId));

  // 3. Handle case where no college is found
  if (!college) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">College Not Found</h1>
        <Link to="/search" className="text-brand-blue mt-4 inline-block">← Back to Search</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/search" className="text-brand-blue font-semibold mb-6 inline-block">
          &larr; Back to Search Results
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img className="h-64 w-full object-cover" src={college.imageUrl} alt={`Campus of ${college.name}`} />
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{college.name}</h1>
                    <p className="mt-1 text-lg text-gray-500">{college.city}, {college.state}</p>
                </div>
                <div className="flex-shrink-0 ml-4 text-center bg-yellow-100 px-4 py-2 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{college.rating} ★</div>
                    <div className="text-xs text-yellow-700">User Rating</div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{college.overview}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Courses Offered</h3>
                    <div className="flex flex-wrap gap-2">
                        {college.courses.map(course => (
                            <span key={course} className="bg-blue-100 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full">{course}</span>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Average Annual Fees</h3>
                    <p className="text-3xl font-bold text-gray-900">₹ {college.fees.toLocaleString('en-IN')}</p>
                </div>
            </div>
             <div className="mt-8 text-center">
                <button className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition-all text-lg">
                    Apply Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
