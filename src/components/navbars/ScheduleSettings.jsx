import React from "react";
import { useState } from "react";
import NewEventSidebar from "./NewEventSidebar";
import close from "../../assets/icon/close.svg";
import next from "../../assets/icon/next.svg";
import clock from "../../assets/icon/clock.svg";
import group from "../../assets/icon/group.svg";
import video from "../../assets/icon/video.svg";
import telephone from "../../assets/icon/telephone.svg";
import pin from "../../assets/icon/pin.svg";
import down from "../../assets/icon/down.svg";
import link from "../../assets/icon/link.svg";

function ScheduleSettings() {
  const [showComponent, setShowComponent] = useState(false);
  const handleclick = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  };
  return (
    <section className="overlay h-[100vh] w-[100vw] fixed top-0 left-0 right-0">
      <div className="bg-[#F9F9FE] h-[100vh]  rounded-lg px-7 content-between w-[500px] flex-col absolute right-0 top-0">
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-left text-[25px] mt-0">Event Creation</h1>
          <img
            className="h-[23px] w-[23px] text-right align-middle"
            src={close}
            alt="close-icon"
          ></img>
        </div>
        <div className="flex justify-center space-x-5 mt-2 mb-2">
          <button className="text-[#B3B9C5]" onClick={handleclick}>
            Event Details
          </button>
          {showComponent && <NewEventSidebar />}
          <button className="text-[#6572E1] font-semibold underline">
            Scheduling Settings
          </button>
        </div>
        <form className=" flex items-center flex-col justify-center max-w-[100%]">
          <div className="flex space-x-12">
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary-b border p-4 flex items-center w-full max-sm:mr-0">
                  Cancel
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary border p-4 flex items-center w-full max-sm:mr-0">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ScheduleSettings;
