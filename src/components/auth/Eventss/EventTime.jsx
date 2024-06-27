import React, { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import back from "../../../assets/icon/back.svg";
import link from "../../../assets/icon/link.svg";
import user from "../../../assets/icon/user.svg";
import clocktwo from "../../../assets/icon/clocktwo.svg";
import telephone from "../../../assets/icon/telephone.svg";
import down from "../../../assets/icon/down.svg";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

function EventTime() {
  const events = [
    { title: "", start: new Date() },
    { title: "", date: "2024-04-19" },
    { title: "", date: "2024-05-19" },
  ];

  const [selectHour, setSelectHour] = useState(null);
  const [eventTime, setEventTime] = useState(false);

  const handleDateClick = (info) => {
    setEventTime((prev) => !prev);
    console.log(info.dateStr);
  };

  const handleButtonClick = (hour) => {
    setSelectHour(hour);
  };

  const hours = ["8:30", "10:00", "11:30", "13:00", "15:30", "17:00", "18:00"];
  return (
    <div>
      <div className="flex">
        <div className="pl-9 flex-grow overflow-auto">
          <FullCalendar
            events={events}
            eventTime={eventTime}
            setEventTime={setEventTime}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="auto"
            contentHeight="auto"
            dateClick={handleDateClick}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[213px] h-[334px] bg-[#F9F9FE] rounded-lg mt-[175px] mr-2">
            <div className="flex flex-col justify-center items-center space-y-2 p-3">
              {hours.map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleButtonClick(hour)}
                  className={
                    selectHour === hour
                      ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                      : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                  }
                >
                  <p className="text-[#6572E1] font-medium">{hour}</p>
                </button>
              ))}
            </div>
          </div>
          {selectHour !== null && (
            <>
              <div className="flex  flex-col items-center justify-end space-y-1 py-2 px-0">
                <div className="flex justify-center items-center flex-col w-full m-auto">
                  <div className="flex items-center flex-col justify-center w-full mx-auto">
                    <button className="btn-primary-b border p-4 flex items-center w-[183px] max-sm:mr-0 mb-2 ">
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col w-full m-auto">
                  <div className="flex items-center flex-col justify-center w-full mx-auto">
                    <button
                      type="submit"
                      className="btn-primary border p-4 flex items-center w-[183px] max-sm:mr-0 mb-2"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* <div class="w-[213px] h-[334px] bg-[#F9F9FE] rounded-lg">
                <div class="flex flex-col justify-center items-center space-y-2 p-3">
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">8:30</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">10:00</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">11:30</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">13:00</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">15:30</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">17:00</p>
                  </button>
                  <button
                    onClick={() => setSelectHour(!selectHour)}
                    className={
                      !selectHour
                        ? "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border border-[#DFE1E7] w-[183px] h-[37px]"
                        : "flex items-center justify-center bg-[#FFFFFF] px-5 p-3 rounded-lg border-2 border-[#6572E1] w-[183px] h-[37px]"
                    }
                  >
                    <p className="text-[#6572E1] font-medium">18:00</p>
                  </button>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default EventTime;
