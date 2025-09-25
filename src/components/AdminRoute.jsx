import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AdminRoute = ({ children }) => {
  const { user, loading: authLoading } = useAuth(); // Renamed to avoid confusion
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      // We assume the user is not an admin until proven otherwise
      setIsAdmin(false);
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            setIsAdmin(true);
          }
        } catch (error) {
          console.error("Error verifying admin role:", error);
        } finally {
          // This block runs whether the 'try' succeeded or failed, ensuring we stop verifying.
          setIsVerifying(false);
        }
      } else {
        // If there's no user, we are done verifying.
        setIsVerifying(false);
      }
    };

    // Only run the verification after the initial Firebase auth check is complete.
    if (!authLoading) {
      verifyAdmin();
    }
  }, [user, authLoading]);

  // Show a loading screen while either Firebase Auth or our admin check is running.
  if (authLoading || isVerifying) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-xl font-semibold">Verifying Access...</p>
        </div>
      </div>
    );
  }

  // If verification is complete and the user is not an admin, redirect them.
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  // If they passed all checks, show them the admin page.
  return children;
};

export default AdminRoute;
