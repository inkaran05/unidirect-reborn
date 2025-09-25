import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Latest Opportunities
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Get the latest college admissions, scholarship opportunities, and career tips delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-brand-blue font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
          {isSubscribed && (
            <p className="mt-4 text-green-300 font-semibold animate-fade-in">
              ✅ Thank you for subscribing! Check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
