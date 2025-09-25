import React, { useState, useEffect } from 'react';
import { testimonials } from '../mock-data';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Hear from our learners</h2>
          <p className="mt-2 text-lg text-gray-600">Discover the impact of our quality from the community.</p>
        </div>
        <div className="relative max-w-4xl mx-auto mb-20 min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-brand-blue/20"
                />
                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.message}"</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-brand-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
