import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/JWT Management/AuthProvider";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon/logo.png";
import dashboard from "../../assets/icon/dashboard.png";
import car from "../../assets/icon/car.png";
import description from "../../assets/icon/description.png";
import gear from "../../assets/icon/gear.png";
import analytics from "../../assets/icon/analytics.png";
import calendar from "../../assets/icon/calendar.png";
import power from "../../assets/icon/power.png";
import iconeuser from "../../assets/icon/iconeuser.svg";
import "../../Styles/HomePage.css";

function Sidebar() {
  const [page, setPage] = useState("home");
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/Login", { replace: true });
  };
  return (
    <div>
      <ul className="links">
        <nav className="navbar bg-white fixed left-0 h-[100%] pt-[20px] pl-[20px] pr-[20px] border-r-2 border-gray-100 shadow-sm">
          <Link to="/" onClick={() => setPage("home")} className="logo mb-10">
            <img src={logo} alt="logo" />
          </Link>

          <button className="btn-icon bg-[#F3F4F6] p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/Dashboard"
              onClick={() => setPage("dashboard")}
              className="dashboard"
            >
              <img className="items-center" src={dashboard} alt="dashboard" />
            </Link>
          </button>

          <button className="btn-icon bg-[#F3F4F6] p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/EventTypes"
              onClick={() => setPage("eventtypes")}
              className="eventtypes"
            >
              <img className="items-center" src={analytics} alt="analytics" />
            </Link>
          </button>

          <button className="btn-icon bg-[#6572E1] border p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/Calendar"
              onClick={() => setPage("calendar")}
              className="calendar"
            >
              <img className="items-center" src={calendar} alt="calendar" />
            </Link>
          </button>

          <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/Contacts"
              onClick={() => setPage("contacts")}
              className="contacts"
            >
              <img className="items-center" src={iconeuser} alt="contacts" />
            </Link>
          </button>

          <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/Description"
              onClick={() => setPage("description")}
              className="description"
            >
              <img
                className="items-center"
                src={description}
                alt="description"
              />
            </Link>
          </button>

          <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link to="/Car" onClick={() => setPage("car")} className="car">
              <img className="items-center" src={car} alt="car" />
            </Link>
          </button>

          <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-13 h-13 mt-5 mb-5">
            <Link
              to="/Settings"
              onClick={() => setPage("settings")}
              className="settings"
            >
              <img className="items-center" src={gear} alt="settings" />
            </Link>
          </button>
          <div className="mt-[150px]">
            <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-13 h-13">
              <Link
                to="/Login"
                onClick={() => handleLogout("logout")}
                className="logoff"
              >
                <img className="items-center" src={power} alt="logoff" />
              </Link>
            </button>
          </div>
        </nav>
      </ul>
    </div>
  );
}

export default Sidebar;
