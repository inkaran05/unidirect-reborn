import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

// --- Management Components ---

// This is our fully functional component for managing colleges
const ManageColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [currentCollege, setCurrentCollege] = useState({
    name: '', city: '', state: '', fees: 0, rating: 0, overview: '', courses: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const collegesCollection = collection(db, 'colleges');
    const unsubscribe = onSnapshot(collegesCollection, (snapshot) => {
      const collegeList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setColleges(collegeList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setCurrentCollege(prev => ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
  };
  
  const handleAddNewClick = () => {
    setEditingId(null);
    setCurrentCollege({ name: '', city: '', state: '', fees: 0, rating: 0, overview: '', courses: '' });
    setShowModal(true);
  };
  
  const handleEditClick = (college) => {
    setEditingId(college.id);
    setCurrentCollege({ ...college, courses: college.courses.join(', ') });
    setShowModal(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this college? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, 'colleges', id));
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Failed to delete college.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const collegeData = { ...currentCollege, courses: currentCollege.courses.split(',').map(course => course.trim()) };
    delete collegeData.id;

    try {
      if (editingId) {
        const collegeRef = doc(db, 'colleges', editingId);
        await updateDoc(collegeRef, collegeData);
      } else {
        await addDoc(collection(db, 'colleges'), { ...collegeData, imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Coming+Soon", createdAt: new Date() });
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error saving document: ", error);
      alert("Failed to save college. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (loading) return <div>Loading College Data...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Manage Colleges</h2>
        <button onClick={handleAddNewClick} className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
          + Add New College
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Name</th>
                <th className="p-4 font-semibold text-gray-600">City</th>
                <th className="p-4 font-semibold text-gray-600">Fees</th>
                <th className="p-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map(college => (
                <tr key={college.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{college.name}</td>
                  <td className="p-4 text-gray-600">{college.city}</td>
                  <td className="p-4 text-gray-600">₹{college.fees.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                      <button onClick={() => handleEditClick(college)} className="text-blue-600 hover:underline mr-4 font-semibold">Edit</button>
                      <button onClick={() => handleDeleteClick(college.id)} className="text-red-600 hover:underline font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
         {colleges.length === 0 && <p className="text-center p-8 text-gray-500">No colleges found in the database.</p>}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-6">{editingId ? 'Edit College' : 'Add New College'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={currentCollege.name} onChange={handleInputChange} placeholder="College Name" required className="w-full p-2 border rounded"/>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="city" value={currentCollege.city} onChange={handleInputChange} placeholder="City" required className="w-full p-2 border rounded"/>
                <input type="text" name="state" value={currentCollege.state} onChange={handleInputChange} placeholder="State" required className="w-full p-2 border rounded"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" name="fees" value={currentCollege.fees} onChange={handleInputChange} placeholder="Annual Fees" required className="w-full p-2 border rounded"/>
                <input type="number" name="rating" step="0.1" value={currentCollege.rating} onChange={handleInputChange} placeholder="Rating (e.g., 4.5)" required className="w-full p-2 border rounded"/>
              </div>
              <textarea name="overview" value={currentCollege.overview} onChange={handleInputChange} placeholder="Overview" required className="w-full p-2 border rounded h-24"></textarea>
              <input type="text" name="courses" value={currentCollege.courses} onChange={handleInputChange} placeholder="Courses (comma-separated, e.g., BBA, BCA)" required className="w-full p-2 border rounded"/>
              <div className="mt-6 flex justify-end space-x-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-200 rounded-lg font-semibold">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-brand-blue text-white rounded-lg font-semibold disabled:bg-gray-400">
                  {isSubmitting ? 'Saving...' : (editingId ? 'Update College' : 'Save College')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const blogsCollection = collection(db, 'blogs');
    const unsubscribe = onSnapshot(blogsCollection, (snapshot) => {
      const blogList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddNewClick = () => {
    setEditingId(null);
    setCurrentBlog({ title: '', content: '' });
    setShowModal(true);
  };
  
  const handleEditClick = (blog) => {
    setEditingId(blog.id);
    setCurrentBlog(blog);
    setShowModal(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      await deleteDoc(doc(db, 'blogs', id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingId) {
        const blogRef = doc(db, 'blogs', editingId);
        await updateDoc(blogRef, { ...currentBlog, updatedAt: Timestamp.now() });
      } else {
        await addDoc(collection(db, 'blogs'), { ...currentBlog, createdAt: Timestamp.now() });
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error saving blog post: ", error);
      alert("Failed to save blog post.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (loading) return <div>Loading Blog Posts...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Manage Blog Posts</h2>
        <button onClick={handleAddNewClick} className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">
          + New Post
        </button>
      </div>
       <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Title</th>
                <th className="p-4 font-semibold text-gray-600">Created At</th>
                <th className="p-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{blog.title}</td>
                  <td className="p-4 text-gray-600">{blog.createdAt?.toDate().toLocaleDateString()}</td>
                  <td className="p-4">
                      <button onClick={() => handleEditClick(blog)} className="text-blue-600 hover:underline mr-4 font-semibold">Edit</button>
                      <button onClick={() => handleDeleteClick(blog.id)} className="text-red-600 hover:underline font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
         {blogs.length === 0 && <p className="text-center p-8 text-gray-500">No blog posts found. Add one to get started!</p>}
      </div>

      {showModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
            <h3 className="text-2xl font-bold mb-6">{editingId ? 'Edit Post' : 'Create New Post'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" value={currentBlog.title} onChange={handleInputChange} placeholder="Blog Post Title" required className="w-full p-3 border rounded text-lg font-semibold"/>
              <textarea name="content" value={currentBlog.content} onChange={handleInputChange} placeholder="Write your content here... (Markdown is supported)" required className="w-full p-3 border rounded h-64 font-mono"></textarea>
              <div className="mt-6 flex justify-end space-x-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-200 rounded-lg font-semibold">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-brand-blue text-white rounded-lg font-semibold disabled:bg-gray-400">
                  {isSubmitting ? 'Publishing...' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ManageUsers = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usersCollection = collection(db, 'users');
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const toggleAdminRole = async (userToUpdate) => {
      if(currentUser.uid === userToUpdate.id) {
          alert("You cannot change your own role.");
          return;
      }
      const newRole = userToUpdate.role === 'admin' ? 'user' : 'admin';
      const confirmMessage = `Are you sure you want to change this user's role to ${newRole}?`;

      if (window.confirm(confirmMessage)) {
          const userRef = doc(db, 'users', userToUpdate.id);
          try {
              await updateDoc(userRef, { role: newRole });
          } catch (error) {
              console.error("Error updating user role: ", error);
              alert("Failed to update user role.");
          }
      }
  };

  if (loading) return <div>Loading Users...</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h2>
       <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">User Email</th>
                <th className="p-4 font-semibold text-gray-600">Role</th>
                <th className="p-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.role || 'user'}
                    </span>
                  </td>
                  <td className="p-4">
                      <button 
                        onClick={() => toggleAdminRole(user)} 
                        className="text-blue-600 hover:underline font-semibold disabled:text-gray-400 disabled:no-underline"
                        disabled={currentUser.uid === user.id}
                      >
                        Toggle Admin
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
       </div>
    </div>
  );
};


// --- Main Admin Page Component ---
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
