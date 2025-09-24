// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook to make it easy to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the Provider component that will wrap our entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 'null' means the user is logged out

  // Simulate a login
  const login = () => {
    // In a real app, you'd get user data from Firebase here.
    // For now, we'll just create a fake user object.
    const fakeUser = { name: 'Karan Kumar', email: 'in.iamkaran@gmail.com' };
    setUser(fakeUser);
  };

  // Simulate a logout
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
