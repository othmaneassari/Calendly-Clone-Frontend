import React from "react";
import "../../Styles/HomePage.css";
import print from "../../assets/icon/print.svg";
import plusplus from "../../assets/icon/plusplus.svg";
import threedots from "../../assets/icon/threedots.svg";
import orange from "../../assets/icon/orange.svg";
import contact from "../../assets/icon/contact.svg";

function Agenda() {
  return (
    <div className="right-pane">
      <div className="container p-6 bg-[#F9F9FE] rounded-lg px-7 content-between w-[100%] flex-col">
        <div className="flex font-semibold text-[#56647E] text-[20px]">
          <p> Votre agenda</p>
          <div className="flex justify-end">
            <button className="btn-icon border p-4 flex items-center mx-2"></button>
            <button className="btn-icon border p-4 flex items-center mx-2">
              <img src={print} alt="" />
            </button>
            <button className="btn-secondary border p-4 flex items-center mx-2">
              <img src={plusplus} alt="" />
              New Meeting
            </button>
          </div>
        </div>

        <div className="flex justify-start font-normal text-[#B0B6C4] text-[16px] mt-10">
          06 Octobre
          <img src={threedots} alt="" />
        </div>

        <div className="flex my-5">
          <div className="flex-col justify-self-start mx-2 p-2">
            <p className="font-semibold text-[#6572E1] text-[20px] text-left">
              8:30
            </p>
            <p className="font-semibold text-[#B0B6C4] text-[16px] text-left">
              9:30
            </p>
          </div>
          <img src={orange} alt="" />
          <div className="flex-col text-center mx-3 my-2">
            <p className="text-[#B0B6C4] font-medium text-[16px] text-left">
              Marketing
            </p>
            <p className="text-[#56647E] font-medium text-[16px] text-left">
              Setup Github repository Daily list of document
            </p>
          </div>
          <div className="flex text-center h-5">
            <img src={contact} alt="" />
            <p className="text-[#B0B6C4] text-[14px]"> Sourabah Barua </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
