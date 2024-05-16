import React, { useState } from "react";
import ScheduleSettings from "./ScheduleSettings";
import close from "../../assets/icon/close.svg";
import clock from "../../assets/icon/clock.svg";
import group from "../../assets/icon/group.svg";
import video from "../../assets/icon/video.svg";
import telephone from "../../assets/icon/telephone.svg";
import pin from "../../assets/icon/pin.svg";
import down from "../../assets/icon/down.svg";
import link from "../../assets/icon/link.svg";
import next from "../../assets/icon/next.svg";
import back from "../../assets/icon/back.svg";
import write from "../../assets/icon/write.svg";

function NewEventSidebar() {
  const [showComponent, setShowComponent] = useState(false);
  const [dateRange, setDateRange] = useState(false);
  const [dateEdit, setDateEdit] = useState(false);
  const handleclick = () => {};
  return (
    <section className="overlay h-[100vh] w-[100vw] fixed top-0 left-0 right-0">
      <div className="container py-12  bg-[#F9F9FE] h-[100vh]  rounded-lg px-7 content-between w-[500px] flex-col absolute right-0 top-0">
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-left text-[25px] mt-0">Event Creation</h1>
          <img
            className="h-[23px] w-[23px] text-right align-middle"
            src={close}
            alt="close-icon"
          ></img>
        </div>
        <div className="flex justify-center space-x-5 mt-2">
          <button
            onClick={() => setShowComponent(false)}
            className="text-[#6572E1] font-semibold underline"
          >
            Event Details
          </button>
          <button
            className="text-[#B3B9C5]"
            onClick={() => setShowComponent(true)}
          >
            Scheduling Settings
          </button>
          {/* {showComponent && <ScheduleSettings />} */}
        </div>
        <div className=" flex items-center flex-col justify-center max-w-[100%]">
          {showComponent ? (
            <>
              {!dateRange ? (
                <>
                  <div className="w-full mt-3 mb-3">
                    <div className="flex flex-col items-start mb-2">
                      <p className="text-[15px] font-medium">Date range</p>
                      <p className="text-[13px]">Guests can schedule...</p>
                    </div>
                    <div className="flex items-center mb-2 space-x-2">
                      <label className="custom-radio mx-2 my-2">
                        <input
                          className="mx-2"
                          type="radio"
                          name="DateRangeOption"
                        ></input>
                        <span className="custom-radio-span"></span>
                      </label>
                      <input
                        className="bg-[#F7F7F9] rounded-lg border border-[#DFE1E7] h-[50px] w-[50px] pl-1"
                        placeholder="60"
                        value=""
                      ></input>
                      <select
                        className="bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-[50px] w-[150px]"
                        placeholder="Calendar days"
                        value=""
                      ></select>
                      <p className="text-[13px]">in the future</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <label className="custom-radio mx-2 my-2">
                        <input
                          className="mx-2"
                          type="radio"
                          name="DateRangeOption"
                        ></input>
                        <span className="custom-radio-span"></span>
                      </label>
                      <p className="text-[13px]">In a date range</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <label className="custom-radio mx-2 my-2">
                        <input
                          className="mx-2"
                          type="radio"
                          name="DateRangeOption"
                        ></input>
                        <span className="custom-radio-span"></span>
                      </label>
                      <p className="text-[13px]">Indefinitely in the future</p>
                    </div>
                  </div>
                  <hr className="horizontal-line"></hr>
                  <div className="flex flex-col w-full items-start">
                    <h1 className="text-[15px] items-start">Available hours</h1>
                    <p className="text-[13px] text-[#B3B9C5] text-justify">
                      Define hours patterns or specific replacement dates for
                      Calendly to propose free time on your calendar
                    </p>
                  </div>
                  <div className="flex items-center justify-between bg-transparent px-5 p-3 rounded-lg border border-[#DFE1E7] h-[60px] w-full my-10">
                    <div className="flex flex-col">
                      <h1 className="text-[15px]">Sourabah Barua</h1>
                      <p className="text-[13px] text-[#B3B9C5]">
                        Mon-Fri, 9am-5pm
                      </p>
                    </div>
                    <button>
                      <img
                        className=""
                        src={next}
                        alt=""
                        onClick={() => setDateRange(true)}
                      ></img>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className=" flex items-center flex-col justify-center w-full">
                    <div className="flex items-center w-full text-[#56647E] text-[15px] justify-between mt-5 mb-5">
                      <button>
                        <img
                          className="mr-2"
                          src={back}
                          alt=""
                          onClick={() => setDateRange(false)}
                        ></img>
                      </button>
                      <h2 className="flex-grow font-semibold">
                        Available Hours
                      </h2>
                      <button>
                        <img
                          className="ml-2"
                          src={write}
                          alt=""
                          onClick={() => setDateEdit((prev) => !prev)}
                        ></img>
                      </button>
                    </div>
                    {!dateEdit ? (
                      <div className="bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-full w-full mb-5">
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Monday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Tuesday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Wednesday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Thursday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Friday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Saturday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
                          <h2>Sunday</h2>
                          <h2>9am - 5pm</h2>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-full w-full mb-5">
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Monday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Tuesday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Wednesday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Thursday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Friday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Saturday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="flex justify-between items-center text-[13px] text-[#56647E] font-semibold ">
                          <h2>Sunday</h2>
                          <div className="flex items-center">
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="9am"
                            />
                            <p>-</p>
                            <input
                              className="px-5 p-3 rounded-lg border border-[#E6E8EC] h-[10px] w-[70px]"
                              alt=""
                              placeholder="5pm"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="firstlast flex-col justify-center w-full max-sm:flex-col mr-0 mb-0">
                <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
                  <label
                    htmlFor="event name"
                    className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
                  >
                    Nom de l'evenement
                  </label>
                  <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]">
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
              <h2 className="text-[#56647E] text-sm font-medium mb-2 text-[13px]">
                Emplacement
              </h2>
              <div className="flex align-center justify-between space-x-3">
                <button className="rounded-lg border-2 border-[#6572E1] w-[100px] h-[93px] flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="max-h-full max-w-full mb-3"
                      src={video}
                      alt=""
                    ></img>
                    <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px]">
                      Zoom
                    </h2>
                  </div>
                </button>
                <button className="rounded-lg border-2 border-[#D8DBE1] w-[100px] h-[93px] flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="max-h-full max-w-full mb-3"
                      src={telephone}
                      alt=""
                    ></img>
                    <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px]">
                      Phone Call
                    </h2>
                  </div>
                </button>
                <button className="rounded-lg border-2 border-[#D8DBE1] w-[100px] h-[93px] flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="max-h-full max-w-full mt-2 mb-3"
                      src={pin}
                      alt=""
                    ></img>
                    <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px]">
                      In-person meeting
                    </h2>
                  </div>
                </button>
                <button className="rounded-lg border-2 border-[#D8DBE1] w-[50px] h-[93px] flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="max-h-full max-w-full"
                      src={down}
                      alt=""
                    ></img>
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] my-2">
                <div className="flex items-center justify-between bg-white px-5 p-3 rounded-lg border border-[#DFE1E7]">
                  <img className="" src={link} alt=""></img>
                  <a
                    className="text-[12px] font-medium"
                    href="web.zoom.us//52662assmsKF86541FJRHSBGD578.."
                  >
                    web.zoom.us//52662assmsKF86541FJRHSBGD578..
                  </a>
                </div>
              </div>
              <div className="flex flex-col   my-2 max-sm:mt-0 w-full pt-0">
                <label
                  htmlFor="event name"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Description/Instructions
                </label>
                <div className="flex justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-[100px]">
                  <input
                    className="w-full h-full p-0 m-0 align-top text-left"
                    type="event name"
                    name=""
                    id=""
                    placeholder="Lorem Upsum..."
                    value=""
                  ></input>
                </div>
              </div>
            </>
          )}

          <div className="flex space-x-12 mt-auto">
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary-b border p-4 flex items-center w-full max-sm:mr-0 mb-5 ">
                  Cancel
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewEventSidebar;
