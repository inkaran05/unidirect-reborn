import React from 'react';
import { partners } from '../mock-data';

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="mt-2 text-lg text-gray-600">Collaborating with leading educational institutions</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 mx-4"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
