// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.js'; // Import auth from our real config file

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  // This is the core of our real authentication.
  // It listens for changes in the user's login state across the entire app.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // This function runs whenever a user logs in or out with Firebase.
      setUser(currentUser);
      setLoading(false); // We are done checking, so we can show the app.
    });

    // This cleans up the listener when the component is no longer on the screen
    return unsubscribe;
  }, []); // The empty array means this effect runs only once when the app starts

  // The logout function will now use the real Firebase signOut.
  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    logout,
    loading,
  };

  // We wait until Firebase has finished its initial check before rendering the app.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
