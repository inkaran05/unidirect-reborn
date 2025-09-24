// src/components/CollegeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={college.imageUrl} alt={`Campus of ${college.name}`} />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <div className="uppercase tracking-wide text-sm text-brand-blue font-bold">{college.city}, {college.state}</div>
                <p className="block mt-1 text-xl leading-tight font-bold text-gray-900">{college.name}</p>
              </div>
              <div className="flex-shrink-0 ml-4 text-center bg-yellow-100 px-3 py-1 rounded-full">
                <div className="text-lg font-bold text-yellow-600">{college.rating} ★</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Avg. Annual Fees</p>
              <p className="font-bold text-lg text-gray-900">₹ {college.fees.toLocaleString('en-IN')}</p>
              <p className="text-sm text-green-600 font-semibold">Placement: {Object.values(college.placements)[Object.values(college.placements).length - 1]}%</p>
            </div>
            <Link to={`/college/${college.id}`} className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
