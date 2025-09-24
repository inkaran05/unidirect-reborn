// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">About UniDirect</h1>
            <p className="mt-4 text-lg text-gray-600">Empowering students to find their dream colleges with ease and confidence.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At UniDirect, we believe every student deserves access to quality education without the stress of navigating complex admission processes. Our platform simplifies college discovery, making it easier for you to find institutions that match your aspirations, budget, and location.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive tools and support for your educational journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Search & Filtering</h3>
              <p className="text-gray-600">Find colleges based on your stream, budget, and preferred location with our advanced search engine.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed College Profiles</h3>
              <p className="text-gray-600">Access comprehensive information including courses, fees, facilities, placement records, and student reviews.</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Get free or low-cost support from our experts to help with applications and admissions.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Opportunities</h3>
              <p className="text-gray-600">Explore study abroad options with direct admission based on your Class 12th performance.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Institutions</h3>
              <p className="text-gray-600">We only feature verified and reputable colleges to ensure quality education.</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">User-Friendly Platform</h3>
              <p className="text-gray-600">Our intuitive interface makes it easy to compare colleges and make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Founded by a team of education enthusiasts and tech innovators, UniDirect was born from the frustration of navigating the complex college admission process. We saw students struggling to find the right information and decided to create a platform that puts students first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">From Idea to Impact</h3>
              <p className="text-gray-600 mb-4">
                Starting as a simple search tool, we've grown into a comprehensive platform that has helped thousands of students find their ideal colleges. Our commitment to transparency and user satisfaction drives everything we do.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a trusted partner in the educational journey of students across India, helping them make informed decisions about their future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-600">Launched in 2023 with 100+ verified colleges</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-600">Expanded to international admissions in 2024</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-600">Helped 10,000+ students find their dream colleges</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-600">Partnerships with 50+ educational institutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">Passionate individuals dedicated to transforming education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-600">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-sm text-gray-500 mt-2">Former education consultant with 10+ years of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-600">👩‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-sm text-gray-500 mt-2">Tech innovator focused on user experience and scalability.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-600">👨‍🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mike Johnson</h3>
              <p className="text-gray-600">Head of Education Partnerships</p>
              <p className="text-sm text-gray-500 mt-2">Building relationships with colleges and universities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
