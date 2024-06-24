import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "../auth/User Profile/UserProfile";
import bell from "../../assets/icon/bell.png";
import JPM from "../../assets/icon/JPM.png";
import gear from "../../assets/icon/gear.png";
import "../../Styles/HomePage.css";
import { useAuth } from "../auth/JWT Management/AuthProvider";
import { jwtDecode } from "jwt-decode";
import Login from "../auth/Login";

function Topbar() {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");
  const { username, email, id } = jwtDecode(token);
  const decodedHeader = jwtDecode(token, { header: true });

  // useEffect(() => {
  //   setName(jwtDecode(token).username);
  // }, []);
  // console.log(token.username);
  return (
    <div>
      <nav className="topbar bg-white flex flex-col fixed left-20 w-[100%] ml-[5px] pt-[15px] pb-[15px] pl-[15px] border-b-2 border-gray-100 shadow-sm">
        <ul className="topbarlinks flex items-center">
          <p className="topbartitle justify-start"> Calender </p>
          <div className="flex items-center ml-[65%]">
            <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-10 h-10 mr-4">
              <Link
                to="/Notifications"
                onClick={() => setPage("notifications")}
                className="notifications"
              >
                <img className="items-center" src={bell} alt="notifications" />
              </Link>
            </button>

            <button className="btn-icon bg-[#F3F4F6] border p-4 flex items-center w-10 h-10 mr-4">
              <Link
                to="/Settings"
                onClick={() => setPage("settings")}
                className="settings"
              >
                <img className="items-center" src={gear} alt="settings" />
              </Link>
            </button>

            <button className="flex items-center h-12 mr-4">
              <Link
                to="/Profile"
                onClick={() => setPage("profile")}
                className="profile"
              >
                <p className="topbar-btn mr-4">{username}</p>
                <img
                  className="items-center mr-4 w-13 h-13"
                  src={JPM}
                  alt="profile"
                />
              </Link>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
