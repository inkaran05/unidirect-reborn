// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';

// Import all your pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import InternationalPage from './pages/InternationalPage';
import CollegeDetailPage from './pages/CollegeDetailPage';
import DashboardPage from './pages/DashboardPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogPage from './pages/BlogPage';

// 1. Import your new Admin components
import AdminPage from './pages/AdminPage';
import AdminRoute from './components/AdminRoute';
import ProtectedRoute from './components/ProtectedRoute';


const router = createBrowserRouter([
  // This is your main public site layout
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
      { path: '/college/:collegeId', element: <CollegeDetailPage /> },
      {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>
      },
      { path: '/stories', element: <SuccessStoriesPage /> },
      { path: '/blog', element: <BlogPage /> },
    ],
  },
  // 2. This is your new, separate, and SECURE admin portal route
  // It is outside the main <App> layout because it has its own unique design.
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
