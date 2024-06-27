import React, { useState } from "react";
import EventTime from "./EventTime";
import EventDetails from "./EventDetails";
import back from "../../../assets/icon/back.svg";
import link from "../../../assets/icon/link.svg";
import user from "../../../assets/icon/user.svg";
import clocktwo from "../../../assets/icon/clocktwo.svg";
import telephone from "../../../assets/icon/telephone.svg";
import down from "../../../assets/icon/down.svg";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core/index.js";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

function Event() {
  const [eventTime, setEventTime] = useState(false);
  const [eventDetails, setEventDetails] = useState(false);
  const [selectHour, setSelectHour] = useState(null);

  const handleDateClick = (info) => {
    setEventTime((prev) => !prev);
    console.log(info.dateStr);
  };
  const events = [
    { title: "", start: new Date() },
    { title: "", date: "2024-04-19" },
    { title: "", date: "2024-05-19" },
  ];
  return (
    <div>
      <div className="flex justify-center items-center bg-[#EEEEEE]">
        <div className="container-event py-0 bg-white rounded-lg px-0 w-[782px] h-full top-10 flex flex-col">
          <div className="flex items-center justify-between w-full mb-4 my-3 mx-3">
            <button className="bg-[#EEEFFC] w-[45px] h-[45px] rounded-full flex items-center justify-center overflow-hidden p-3">
              <img src={back} alt="" />
            </button>
            <button className="flex items-center space-x-1 mr-5 p-5">
              <img src={link} alt="" />
              <p className="text-[13px] text-[#6572E1] underline">Copy link</p>
            </button>
          </div>

          <div className="container-event py-0 bg-white border border-[#E2E8ED] rounded-lg  w-full h-fit flex flex-col">
            <div className="flex flex-col text-[#56647E] items-center">
              <h1 className="text-[28px]">Meeting IRM</h1>
              <h2>Setup Github repository Daily list of document</h2>
            </div>
            <hr className="horizontal-line-event my-4 m-auto"></hr>
            <div className="flex items-center justify-between mx-8">
              <div className="flex items-center space-x-1">
                <img className="h-[20px] w-[20px]" src={user} alt="" />
                <p className="text-[13px] text-[#919AAB] font-semibold">
                  Othmane Assari
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-1">
                  <img className="h-[20px] w-[20px]" src={clocktwo} alt="" />
                  <p className="text-[13px] text-[#919AAB] font-semibold">
                    30min
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <img className="h-[20px] w-[20px]" src={telephone} alt="" />
                  <p className="text-[13px] text-[#919AAB] font-semibold">
                    Phone Call
                  </p>
                </div>
              </div>
            </div>
            <hr className="horizontal-line-event my-4 mb-2 m-auto"></hr>
            <div className="flex items-center justify-between mx-8">
              <h1 className="text-[15px] pb-1">Select a Date & Time</h1>
              <div className="flex items-center space-x-3">
                <h1 className="text-[13px]">Zone Time</h1>
                <button className="btn-google border p-4 flex items-center mx-2 bg-[#EEEFFC]">
                  <h1 className="text-[13px] font-medium pb-1">
                    Morocco Time (16:32)
                  </h1>
                  <img src={down} alt="" />
                </button>
              </div>
            </div>
            <div className="p-10 flex-grow overflow-auto">
              {!eventTime && (
                <FullCalendar
                  events={events}
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  height="auto"
                  contentHeight="auto"
                  dateClick={handleDateClick}
                />
              )}
              {eventTime ? (
                <EventTime
                  events={events}
                  plugins={[dayGridPlugin, interactionPlugin]}
                  setSelectHour={setSelectHour}
                  selectHour={selectHour}
                  dateClick={handleDateClick}
                />
              ) : (
                <></>
              )}
              {/* /* <button onClick={() => setEventTime((prev) => !prev)}>
                {!eventTime ? (
                  <EventTime
                    setSelectHour={setSelectHour}
                    selectHour={selectHour}
                  />
                ) : (
                  <FullCalendar
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    height="auto"
                    contentHeight="auto"
                  />
                )}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
