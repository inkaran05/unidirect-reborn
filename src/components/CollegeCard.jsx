// src/components/CollegeCard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';

const CollegeCard = ({ college }) => {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // This effect checks if the current college is in the user's saved list
  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      getDoc(userDocRef).then(docSnap => {
        if (docSnap.exists() && docSnap.data().savedColleges?.includes(college.id)) {
          setIsSaved(true);
        }
      });
    }
  }, [user, college.id]);

  const handleSaveToggle = async () => {
    if (!user) {
      alert("Please log in to save colleges.");
      return;
    }
    setIsProcessing(true);
    const userDocRef = doc(db, 'users', user.uid);
    try {
      if (isSaved) {
        // Unsave the college
        await updateDoc(userDocRef, {
          savedColleges: arrayRemove(college.id)
        });
        setIsSaved(false);
      } else {
        // Save the college
        await updateDoc(userDocRef, {
          savedColleges: arrayUnion(college.id)
        });
        setIsSaved(true);
      }
    } catch (error) {
      console.error("Error updating saved colleges: ", error);
      alert("Failed to update your saved list.");
    } finally {
      setIsProcessing(false);
    }
  };

  const HeartIcon = ({ saved }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors ${saved ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21.75l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
      {user && (
        <button 
          onClick={handleSaveToggle}
          disabled={isProcessing}
          className="absolute top-4 right-4 z-10 p-2 bg-white/70 rounded-full backdrop-blur-sm disabled:opacity-50"
          aria-label="Save college"
        >
          <HeartIcon saved={isSaved} />
        </button>
      )}
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={college.imageUrl} alt={`Campus of ${college.name}`} />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <div className="uppercase tracking-wide text-sm text-brand-blue font-bold">{college.city}, {college.state}</div>
                <p className="block mt-1 text-xl leading-tight font-bold text-gray-900 pr-12">{college.name}</p>
              </div>
              <div className="flex-shrink-0 ml-4 text-center bg-yellow-100 px-3 py-1 rounded-full">
                <div className="text-lg font-bold text-yellow-600">{college.rating} ★</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Avg. Annual Fees</p>
              <p className="font-bold text-lg text-gray-900">₹ {college.fees.toLocaleString('en-IN')}</p>
            </div>
            <Link to={`/college/${college.id}`} className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
