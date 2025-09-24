import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">UniDirect</h3>
            <p className="text-gray-400 text-sm">Your direct path to higher education.</p>
          </div>

          {/* Column 2: Top Streams */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Top Streams</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Arts & Science</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
           <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-300">Subscribe to our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates on admissions and colleges.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" />
              <button className="bg-brand-blue text-white font-bold px-4 py-2 rounded-r-md hover:bg-blue-700">Go</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} UniDirect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
