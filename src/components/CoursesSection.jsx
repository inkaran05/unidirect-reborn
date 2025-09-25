import React from 'react';
import { colleges } from '../mock-data';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Discover Our Courses</h2>
          <p className="mt-2 text-lg text-gray-600">Find the perfect program to match your career goals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {colleges.map((college) => (
            <Link
              key={college.id}
              to={`/search?location=${college.city}`}
              className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              title={college.name}
            >
              <img
                src={college.imageUrl}
                alt={college.name}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-900">{college.name}</h3>
              <p className="text-sm text-gray-600">{college.overview.substring(0, 60)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
