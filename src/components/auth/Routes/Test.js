import React from "react";
import { useAuth } from "../JWT Management/AuthProvider";
import Login from "../Login";
import Register from "../Register";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../../Dashboard/Dashboard";
import HeroSection from "../../HomePage/HeroSection";

const ProtectedRoute = ({ element, isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  return React.cloneElement(element, props);
};

const Test = () => {
  const { token } = useAuth();

  // Routes for public users
  const routesForPublic = [
    { path: "/", element: <HeroSection /> },
    { path: "/Login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    { path: "/Guide", element: <div>Guide Page</div> },
  ];

  return (
    <Routes>
      {/* Public routes */}
      {routesForPublic.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Protected route (Dashboard) */}
      <Route
        path="/Dashboard"
        element={
          <ProtectedRoute isAuthenticated={!!token} element={<Dashboard />} />
        }
      />
    </Routes>
  );
};

export default Test;
