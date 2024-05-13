import React from "react";
import close from "../../assets/icon/close.svg";
import clock from "../../assets/icon/clock.svg";
import group from "../../assets/icon/group.svg";
function NewEventSidebar() {
  return (
    <section className="overlay h-[100vh] w-[100vw] fixed top-0 left-0 right-0">
      Overlay
      <div className="container p-6 bg-[#F9F9FE] rounded-lg px-7 content-between w-[500px] flex-col">
        <div className="flex justify-between">
          <h1 className="text-left text-[25px]">Event Creation</h1>
          <img
            className="h-[23px] w-[23px] text-right"
            src={close}
            alt="close-icon"
          ></img>
        </div>
        <div className="flex justify-between">
          <button className="text-[#6572E1] font-semibold">
            Event Details
          </button>
          <button className="text-[#B3B9C5]">Scheduling Settings</button>
        </div>
        <form className=" flex items-center flex-col justify-center max-w-[100%] mx-9">
          <div className="firstlast flex-col justify-center w-full max-sm:flex-col mr-0 mb-0">
            <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
              <label
                htmlFor="event name"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
              >
                Nom de l'evenement
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]  ">
                <input
                  className="w-full"
                  type="event name"
                  name=""
                  id=""
                  placeholder="Lorem Upsum..."
                  value=""
                />
              </div>
            </div>
            <div className="flex flex-col  my-2 max-sm:mt-0 w-full">
              <label
                htmlFor="event duration"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
              >
                Duration
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                <img className="mr-2" src={clock} alt=""></img>
                <input
                  className="w-full"
                  type="Last name"
                  name=""
                  id=""
                  placeholder="1h30min"
                />
                <img className="ml-2" src={group} alt=""></img>
              </div>
            </div>
          </div>
          <h2 className="text-[#56647E]">Emplacement</h2>
          <button className="rounded-lg border border-[#6572E1]"></button>
        </form>
      </div>
    </section>
  );
}

export default NewEventSidebar;
