// src/pages/DashboardPage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import CollegeCard from '../components/CollegeCard'; // Reuse our card component

const DashboardPage = () => {
  const { user } = useAuth();
  const [savedColleges, setSavedColleges] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchSavedColleges = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // 1. Get the user's profile to find the list of saved college IDs
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().savedColleges?.length > 0) {
          const savedCollegeIds = userDoc.data().savedColleges;
          
          // 2. Fetch the full details for each of the saved colleges
          const collegesRef = collection(db, 'colleges');
          const q = query(collegesRef, where('__name__', 'in', savedCollegeIds));
          const querySnapshot = await getDocs(q);
          
          const collegesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSavedColleges(collegesData);
        } else {
          // If the user has no saved colleges
          setSavedColleges([]);
        }
      } catch (err) {
        console.error("Error fetching saved colleges:", err);
        setError("Could not load your saved colleges. Please try again later.");
      } finally {
        // This will run whether the fetch succeeded or failed, stopping the loading state.
        setLoading(false);
      }
    };

    fetchSavedColleges();
  }, [user]);

  return (
    <div className="container mx-auto px-6 py-12 min-h-[70vh]">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, {user?.displayName || user?.email}!
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        This is your personal dashboard. Here are the colleges you've saved for future reference.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Saved Colleges</h2>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading your saved colleges...</p>
          </div>
        ) : error ? (
           <div className="text-center py-12 bg-red-50 rounded-lg">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        ) : savedColleges.length > 0 ? (
          <div className="space-y-6">
            {savedColleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-100 rounded-lg">
            <p className="text-gray-600 text-lg">You haven't saved any colleges yet.</p>
            <Link to="/search" className="mt-4 inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Start Searching Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
