import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.png";
import dashboard from "../../assets/icon/dashboard.png";
import car from "../../assets/icon/car.png";
import description from "../../assets/icon/description.png";
import gear from "../../assets/icon/gear.png";
import analytics from "../../assets/icon/analytics.png";
import calendar from "../../assets/icon/calendar.png";
import power from "../../assets/icon/power.png";
import iconeuser from "../../assets/icon/iconeuser.svg";
import bell from "../../assets/icon/bell.png";
import JPM from "../../assets/icon/JPM.png";
import "../../Styles/HomePage.css";
import Topbar from "../navbars/Topbar";
import Sidebar from "../navbars/Sidebar";
import Calendar from "../Calendar/Calendar";
import Agenda from "../Calendar/Agenda";

function Dashboard() {
  const [setPage] = useState("home");

  return (
    <div>
      <Topbar />

      <Sidebar />

      <div className="text-between pt-[100px] ml-[6%] flex">
        <Calendar />
        <Agenda />
      </div>
    </div>
  );
}

export default Dashboard;
