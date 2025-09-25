// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen'; // 1. Import our new hook

// A small helper component to make applying scroll animations easy
const AnimatedSection = ({ children }) => {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const stream = event.target.stream.value;
    navigate(`/search?location=${location}&stream=${stream}`);
  };

  // List of partners for the marquee
  const partners = [
    'Amity University', 'Delhi Technological University', 'Christ University', 'IIT Patna', 'Heidelberg University', 'LMU Munich', 'University of Oslo'
  ];

  return (
    <main>
      {/* Hero Section - Unchanged */}
      <section className="bg-white">
          <div className="container mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Navigate Your Next Career Move</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">Explore advanced degrees and specialized courses designed to propel your career forward.</p>
              <div className="mt-8 max-w-lg mx-auto lg:mx-0 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border">
                <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div className="text-left"><label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">Select your domain</label><select id="stream" name="stream" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue"><option value="">All Streams</option><option>Engineering</option><option>Management</option><option>Commerce</option></select></div>
                    <div className="text-left"><label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label><input type="text" id="location" name="location" placeholder="e.g., Patna" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue"/></div>
                    <div className="sm:mt-6"><button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700">Explore Now</button></div>
                </form>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://storage.googleapis.com/maker-studio-app-images/project-images/b4408139-49cf-4914-bc48-d36c5ac244be/14c99778-90be-4b95-a22c-a0e4e6c9a393/images/9651912a-dd9b-43d9-93e1-381c63f10137.png" alt="Ambitious students looking towards their future careers with UniDirect" className="rounded-2xl shadow-2xl object-cover w-full h-full"/>
            </div>
          </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-50 py-12">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div><p className="text-3xl md:text-4xl font-extrabold text-brand-blue">10,000+</p><p className="mt-1 text-sm md:text-base text-gray-600">Students Counseled</p></div>
              <div><p className="text-3xl md:text-4xl font-extrabold text-brand-blue">500+</p><p className="mt-1 text-sm md:text-base text-gray-600">Verified Colleges</p></div>
              <div><p className="text-3xl md:text-4xl font-extrabold text-brand-blue">80%</p><p className="mt-1 text-sm md:text-base text-gray-600">Positive Career Impact</p></div>
              <div><p className="text-3xl md:text-4xl font-extrabold text-brand-blue">100+</p><p className="mt-1 text-sm md:text-base text-gray-600">Partner Universities</p></div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* NEW: Auto-Scrolling University Partners */}
      <section className="py-12 bg-white overflow-x-hidden">
        <AnimatedSection>
            <div className="container mx-auto text-center">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">OUR TOP UNIVERSITY PARTNERS</h3>
                <div className="relative w-full h-10 flex items-center">
                    <div className="flex animate-marquee hover:pause">
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex-shrink-0 mx-8 text-gray-500 font-semibold text-xl italic">{partner}</div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
      </section>

      {/* Explore Top Streams Section */}
      <section className="py-20 bg-gray-50">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Discover Our Courses</h2><p className="mt-2 text-lg text-gray-600">Find the perfect program to match your career goals.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Link to="/search?stream=Engineering" className="block p-6 bg-white rounded-lg text-center border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="font-bold text-lg text-gray-800">Engineering</h3></Link>
              <Link to="/search?stream=Management" className="block p-6 bg-white rounded-lg text-center border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="font-bold text-lg text-gray-800">Management</h3></Link>
              <Link to="/search?stream=Commerce" className="block p-6 bg-white rounded-lg text-center border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="font-bold text-lg text-gray-800">Commerce</h3></Link>
              <Link to="/search?stream=Arts" className="block p-6 bg-white rounded-lg text-center border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="font-bold text-lg text-gray-800">Arts & Science</h3></Link>
              <Link to="/search" className="block p-6 bg-blue-50 text-brand-blue rounded-lg text-center border border-dashed border-blue-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center"><h3 className="font-bold text-lg">View All</h3></Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Hear from our learners</h2><p className="mt-2 text-lg text-gray-600">Discover the impact of our quality from the community.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm"><p className="text-gray-700 italic">"UniDirect made the impossible possible. I found a great engineering college within my budget!"</p><div className="mt-4"><p className="font-semibold text-gray-900">Anjali Kumari</p></div></div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm"><p className="text-gray-700 italic">"As a commerce student, I was overwhelmed. The guidance from the UniDirect team was free and incredibly helpful."</p><div className="mt-4"><p className="font-semibold text-gray-900">Rohan Sharma</p></div></div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm"><p className="text-gray-700 italic">"I never thought I could study abroad until I found the international section. They guided me through the whole process."</p><div className="mt-4"><p className="font-semibold text-gray-900">Priya Singh</p></div></div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default HomePage;
