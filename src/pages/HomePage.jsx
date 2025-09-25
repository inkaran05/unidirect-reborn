// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import NewsletterSection from '../components/NewsletterSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-blue">10,000+</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">Students Counseled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-blue">500+</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">Verified Colleges</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-blue">80%</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">Positive Career Impact</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-blue">100+</p>
              <p className="mt-1 text-sm md:text-base text-gray-600">Partner Universities</p>
            </div>
          </div>
        </div>
      </section>

      <CoursesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
