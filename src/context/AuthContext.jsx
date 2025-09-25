// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth instance from your firebase.js

// Create the context
const AuthContext = createContext();

// Create a custom hook to make it easy to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the Provider component that will wrap our entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 'null' means the user is logged out
  const [loading, setLoading] = useState(true); // To handle the initial loading state

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error; // Throw error so the component can handle it
    }
  };

  // Signup function
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error; // Throw error so the component can handle it
    }
  };

  // Forgot Password function
  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    login,
    signup,
    forgotPassword,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
