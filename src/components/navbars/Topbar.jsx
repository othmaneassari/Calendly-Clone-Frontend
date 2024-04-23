import React, { useState } from "react";
import { Link } from "react-router-dom";
import bell from "../../assets/icon/bell.png";
import JPM from "../../assets/icon/JPM.png";
import gear from "../../assets/icon/gear.png";
import "../../Styles/HomePage.css";

function Topbar() {
  const [setPage] = useState("home");
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
              <p className="topbar-btn mr-4">Jean-Pierre Martin</p>
              <img
                className="items-center mr-4 w-13 h-13"
                src={JPM}
                alt="profile"
              />
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
