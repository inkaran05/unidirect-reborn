import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; // 1. Import Firestore real-time listener
import { db } from '../firebase'; // 2. Import our database connection

// This is our new, functional component for managing colleges
const ManageColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. This useEffect hook fetches and listens for real-time updates from Firestore
  useEffect(() => {
    const collegesCollection = collection(db, 'colleges');
    
    // onSnapshot creates a live listener. Any change in the DB will be reflected here.
    const unsubscribe = onSnapshot(collegesCollection, (snapshot) => {
      const collegeList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setColleges(collegeList);
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty array ensures this runs only once when the component mounts

  if (loading) {
    return <div>Loading College Data...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Manage Colleges</h2>
        <button className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
          + Add New College
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
         <table className="w-full text-left">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Name</th>
                <th className="p-4 font-semibold text-gray-600">City</th>
                <th className="p-4 font-semibold text-gray-600">State</th>
                <th className="p-4 font-semibold text-gray-600">Fees</th>
                <th className="p-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map(college => (
                <tr key={college.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{college.name}</td>
                  <td className="p-4 text-gray-600">{college.city}</td>
                  <td className="p-4 text-gray-600">{college.state}</td>
                  <td className="p-4 text-gray-600">₹{college.fees.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                      {/* These buttons are placeholders for now */}
                      <button className="text-blue-600 hover:underline mr-4 font-semibold">Edit</button>
                      <button className="text-red-600 hover:underline font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
         {colleges.length === 0 && <p className="text-center p-8 text-gray-500">No colleges found in the database.</p>}
      </div>
    </div>
  );
};

// Placeholder components for other sections
const ManageBlogs = () => <div className="text-3xl font-bold">Blog Management</div>;
const ManageUsers = () => <div className="text-3xl font-bold">User Management</div>;

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('colleges');

  const renderContent = () => {
    switch (activeTab) {
      case 'colleges':
        return <ManageColleges />;
      case 'blogs':
        return <ManageBlogs />;
      case 'users':
        return <ManageUsers />;
      default:
        return <ManageColleges />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Unchanged */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">UniDirect Admin</h2>
          <p className="text-sm text-gray-400">Content Portal</p>
        </div>
        <nav className="mt-6">
          <button onClick={() => setActiveTab('colleges')} className={`w-full text-left px-6 py-3 transition-colors ${activeTab === 'colleges' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>Manage Colleges</button>
          <button onClick={() => setActiveTab('blogs')} className={`w-full text-left px-6 py-3 transition-colors ${activeTab === 'blogs' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>Manage Blogs</button>
          <button onClick={() => setActiveTab('users')} className={`w-full text-left px-6 py-3 transition-colors ${activeTab === 'users' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>Manage Users</button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPage;
