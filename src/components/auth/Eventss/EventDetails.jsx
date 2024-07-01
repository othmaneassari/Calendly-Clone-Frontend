import React from "react";
import Calendar from "../../Calendar/Calendar";
import back from "../../../assets/icon/back.svg";
import link from "../../../assets/icon/link.svg";
import user from "../../../assets/icon/user.svg";
import clocktwo from "../../../assets/icon/clocktwo.svg";
import telephone from "../../../assets/icon/telephone.svg";
import down from "../../../assets/icon/down.svg";
import calendar from "../../../assets/icon/calendar.svg";
import { useState } from "react";
function EventDetails({ eventDetail, setEventDetail }) {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-[#EEEEEE]">
        <div className="container-event py-0 bg-white rounded-lg px-0 w-[782px] h-[800px] flex flex-col">
          <div className="flex items-center justify-between mx-8">
            <h1 className="text-[15px] pb-1">Enter Details</h1>
            <button className="btn-google-details border p-4 flex items-center mx-2 bg-[#EEEFFC]">
              <img src={calendar} alt="" />
              <h1 className="text-[13px] text-[#6572E1] font-medium pb-1">
                15:30-16:00, Tuesday, June 25, 2024
              </h1>
            </button>
          </div>
          <div className="firstlast flex flex-col justify-center items-center w-full max-sm:flex-col mx-auto">
            <div className="flex w-[90%]">
              <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
                <label
                  htmlFor="first name"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  First Name
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]  ">
                  <input
                    className="w-full"
                    type="first name"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="flex flex-col  my-2 max-sm:mt-0 w-full">
                <label
                  htmlFor="last name"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Last Name
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <input
                    className="w-full"
                    type="Last name"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-[90%]">
              <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
                <label
                  htmlFor="email"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Email
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]  ">
                  <input
                    className="w-full"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col  my-2 max-sm:mt-0 w-full">
                <label
                  htmlFor="phone"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Phone
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <input
                    className="w-full"
                    type="phone"
                    name=""
                    id=""
                    placeholder="+212"
                  />
                </div>
              </div>
            </div>
            <div className="w-[90%]">
              <div className="flex flex-col  my-2 max-sm:mt-0 w-full">
                <label
                  htmlFor="message"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Message
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4 h-[80px]">
                  <input
                    className="w-full"
                    type="message"
                    name=""
                    id=""
                    placeholder="Lorem Upsum..."
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-10 w-full justify-end">
              <div className="flex items-center justify-end space-x-3 py-2 px-10">
                <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
                  <div className="flex items-center flex-col justify-center w-full mx-auto">
                    <button
                      onClick={() => setEventDetail(false)}
                      className="btn-primary-b border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
                  <div className="flex items-center flex-col justify-center w-full mx-auto">
                    <button
                      type="submit"
                      className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
                    >
                      Plan an event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
