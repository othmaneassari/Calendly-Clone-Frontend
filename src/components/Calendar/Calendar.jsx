import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
import calendar from "../../assets/icon/calendar.svg";
import left from "../../assets/icon/left.svg";
import right from "../../assets/icon/right.svg";
function Calendar() {
  return (
    <div className="left-pane flex flex-col">
      <div className="flex text-center font-semibold  text-[#56647E] text-[25px] p-6">
        <img className="rounded-lg px-6" src={calendar} alt="" />
        <p className="">Octobre 2024</p>
        <img className="rounded-lg" src={left} alt="" />
        <img className="rounded-lg" src={right} alt="" />
      </div>

      <ul className="flex items-center justify-evenly px-2 py-2 mx-2 my-2 w-[81%] text-[#B3B9C5]">
        <li>Lun</li>
        <li>Mar</li>
        <li>Mer</li>
        <li>Jeu</li>
        <li>Ven</li>
        <li>Sam</li>
        <li>Dim</li>
      </ul>
      <div className="flex items-center justify-evenly mx-2 my-2 w-[80%]">
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#B0B6C4]">
          01
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#B0B6C4]">
          02
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#B0B6C4]">
          03
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          04
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          05
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          06
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          07
        </button>
      </div>

      <div className="flex items-center justify-evenly mx-2 my-2 w-[80%]">
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          08
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          09
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          10
        </button>
        <button className="btn-calendar p-6 bg-[#6572E1] rounded-lg px-7 text-white">
          11
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          12
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          13
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          14
        </button>
      </div>

      <div className="flex items-center justify-evenly mx-2 my-2 w-[80%]">
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          15
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          16
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          17
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          18
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          19
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          20
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          21
        </button>
      </div>

      <div className="flex items-center justify-evenly mx-2 my-2 w-[80%]">
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          22
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          23
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          24
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          25
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          26
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          27
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          28
        </button>
      </div>

      <div className="flex items-center justify-evenly mx-2 my-2 w-[34%]">
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          29
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          30
        </button>
        <button className="btn-calendar p-6 bg-[#F9F9FE] rounded-lg px-7 text-[#56647E]">
          31
        </button>
      </div>

      <div className="border border-1 border-[#DCDEE4] w-[80%] my-5 ml-3"></div>
    </div>
  );
}

export default Calendar;
