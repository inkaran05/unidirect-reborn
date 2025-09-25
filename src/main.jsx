// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Import our new AuthProvider
import { AuthProvider } from './context/AuthContext.jsx';

// Import your new pages
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import InternationalPage from './pages/InternationalPage.jsx';
import CollegeDetailPage from './pages/CollegeDetailPage.jsx'; // 1. Import the new page
import DashboardPage from './pages/DashboardPage.jsx'; // 2. Import the new dashboard page
import SuccessStoriesPage from './pages/SuccessStoriesPage.jsx'; // Import Success Stories page
import BlogPage from './pages/BlogPage.jsx'; // Import Blog page

// Import ProtectedRoute
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Define the application routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/international', element: <InternationalPage /> },
      { path: '/college/:collegeId', element: <CollegeDetailPage /> }, // 2. Add the new dynamic route
      { path: '/dashboard', element: <ProtectedRoute><DashboardPage /></ProtectedRoute> }, // 3. Add the new dashboard route protected
      { path: '/stories', element: <SuccessStoriesPage /> }, // Add Success Stories route
      { path: '/blog', element: <BlogPage /> }, // Add Blog route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* 1. Add the opening tag here */}
      <RouterProvider router={router} />
    </AuthProvider> {/* 2. Add the closing tag here */}
  </React.StrictMode>,
);
