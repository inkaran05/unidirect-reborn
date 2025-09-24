// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { colleges as allColleges } from '../mock-data.js'; // Import our mock data
import CollegeCard from '../components/CollegeCard';

const SearchPage = () => {
  // State to hold the filtered list of colleges
  const [filteredColleges, setFilteredColleges] = useState(allColleges);

  // State to manage the user's filter selections
  const [filters, setFilters] = useState({
    budget: 500000,
    location: '',
  });

  // This function is called whenever a filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // This `useEffect` hook runs whenever the `filters` state changes
  useEffect(() => {
    let result = allColleges;

    // Filter by budget
    result = result.filter(college => college.fees <= filters.budget);

    // Filter by location (city or state)
    if (filters.location) {
      result = result.filter(college =>
        college.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        college.state.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredColleges(result);
  }, [filters]); // The dependency array ensures this runs only when filters change

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 lg:flex lg:space-x-8">

        {/* Filter Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Filters</h3>
              <div className="space-y-6">

                {/* Budget Filter */}
                <div>
                  <label htmlFor="budget" className="font-semibold text-gray-700 block mb-2">Annual Fee Budget</label>
                  <input
                    type="range"
                    id="budget"
                    name="budget"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={filters.budget}
                    onChange={handleFilterChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50k</span>
                    <span className="font-semibold text-brand-blue">₹ {Number(filters.budget).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label htmlFor="location" className="font-semibold text-gray-700 block mb-2">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    placeholder="e.g., Patna or Bihar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
                  />
                </div>

              </div>
            </div>
          </div>
        </aside>

        {/* College Listings */}
        <main className="w-full lg:w-3/4 mt-8 lg:mt-0">
          <div className="mb-6 flex justify-between items-center">
             <h1 className="text-3xl font-bold">
                {filteredColleges.length} Colleges Found
             </h1>
             {/* We will make the "Sort By" functional later */}
             <select className="border border-gray-300 rounded-lg p-2">
                <option>Sort by: Popularity</option>
                <option>Sort by: Fees (Low to High)</option>
             </select>
          </div>

          <div className="space-y-6">
            {filteredColleges.length > 0 ? (
                filteredColleges.map(college => (
                    <CollegeCard key={college.id} college={college} />
                ))
            ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800">No Colleges Found</h2>
                    <p className="mt-2 text-gray-600">Try adjusting your filters.</p>
                </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
};

export default SearchPage;
