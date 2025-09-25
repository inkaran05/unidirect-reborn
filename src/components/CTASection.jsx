import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Shape Your Future?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of students who have found their perfect educational path with UniDirect.
          Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/search"
            className="bg-white text-brand-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Explore Colleges
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-blue transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
