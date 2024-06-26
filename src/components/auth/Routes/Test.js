import React from "react";
import { useAuth } from "../JWT Management/AuthProvider";
import Login from "../Login";
import Register from "../Register";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../../Dashboard/Dashboard";
import HeroSection from "../../HomePage/HeroSection";
import ScheduleSettings from "../../navbars/ScheduleSettings";
import AvailableHours from "../../navbars/AvailableHours";
import ScheduleModify from "../../navbars/ScheduleModify";
import Contacts from "../Contacts/Contacts";
import EventTypesList from "../Event Types/EventTypesList";
import UserProfile from "../User Profile/UserProfile";
import Event from "../Eventss/Event";
import EventDetails from "../Eventss/EventDetails";

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
    {
      path: "/ScheduleSettings",
      element: (
        <div>
          <ScheduleSettings />
        </div>
      ),
    },
    { path: "/Event", element: <Event /> },
    { path: "/EventDetails", element: <EventDetails /> },
    // {
    //   path: "/AvailableHours",
    //   element: (
    //     <div>
    //       <AvailableHours />
    //     </div>
    //   ),
    // },
    // {
    //   path: "/ScheduleModify",
    //   element: (
    //     <div>
    //       <ScheduleModify />
    //     </div>
    //   ),
    // },
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
      <Route
        path="/Contacts"
        element={
          <ProtectedRoute isAuthenticated={!!token} element={<Contacts />} />
        }
      />
      <Route
        path="/EventTypes"
        element={
          <ProtectedRoute
            isAuthenticated={!!token}
            element={<EventTypesList />}
          />
        }
      />
      <Route
        path="/Profile"
        element={
          <ProtectedRoute isAuthenticated={!!token} element={<UserProfile />} />
        }
      />
    </Routes>
  );
};

export default Test;
