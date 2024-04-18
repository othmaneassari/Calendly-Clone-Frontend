import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
function Dashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <Link> Home </Link>
        <Link
          className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
          to={`/Login`}
        >
          Logout
        </Link>
        <Link
          className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
          to={`/`}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
