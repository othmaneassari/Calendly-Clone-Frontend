import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import close from "../../assets/icon/close.svg";
import clock from "../../assets/icon/clock.svg";
import video from "../../assets/icon/video.svg";
import telephone from "../../assets/icon/telephone.svg";
import pin from "../../assets/icon/pin.svg";
import link from "../../assets/icon/link.svg";
import next from "../../assets/icon/next.svg";
import back from "../../assets/icon/back.svg";
import write from "../../assets/icon/write.svg";

function NewEventSidebar({ overlay, setOverlay }) {
  const [showComponent, setShowComponent] = useState(false);
  const [dateRange, setDateRange] = useState(false);
  const [dateEdit, setDateEdit] = useState(false);
  const Navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(new Date(date));
    setFormData({ ...formData, startdate: date });
  };

  const handleEndDateChange = (date) => {
    setEndDate(new Date(date));
    setFormData({ ...formData, enddate: date });
  };

  const [formData, setFormData] = useState({
    name: "",
    duration: "01",
    description: "",
    location: "",
    startdate: "",
    enddate: "",
  });

  const [error, setError] = useState({
    name: "",
    duration: "",
    description: "",
    location: "",
    startdate: "",
    enddate: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // function handleZoom() {
  //   setFormData(formData.location === "Zoom");
  // }
  // function handlePhone() {
  //   setFormData(formData.location === "Phone Call");
  // }
  // function handleIrl() {
  //   setFormData(formData.location === "In Person");
  // }

  const handlesubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    console.log(formData);
    if (!formData.name) {
      setError((prevError) => ({
        ...prevError,
        name: "Event name is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        name: "",
      }));
    }
    if (!formData.duration) {
      setError((prevError) => ({
        ...prevError,
        duration: "Duration is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        duration: "",
      }));
    }
    if (!formData.description) {
      setError((prevError) => ({
        ...prevError,
        description: "Description is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        description: "",
      }));
    }
    if (!formData.location) {
      setError((prevError) => ({
        ...prevError,
        location: "Location is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        location: "",
      }));
    }
    if (!formData.startdate) {
      setError((prevError) => ({
        ...prevError,
        startdate: "Start date is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        startdate: "",
      }));
    }
    if (!formData.enddate) {
      setError((prevError) => ({
        ...prevError,
        enddate: "End date is required",
      }));
      isValid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        enddate: "",
      }));
    }
    if (formData.startdate && formData.enddate) {
      if (formData.enddate < formData.startdate) {
        setError((prevError) => ({
          ...prevError,
          enddate: "End date can't be sooner than Start date",
        }));
        isValid = false;
      } else {
        setError((prevError) => ({
          ...prevError,
          enddate: "",
        }));
      }
    }
    // setError("");

    axios
      .post("https://localhost:7210/api/EventTypes/create-eventtype", formData)
      .then((response) => {
        console.log(response);
        console.log(formData);
        toast.success(response.data.message);
        if (response.data.status === "Success") {
          setOverlay(false);
          Navigate("/EventTypes");
        }
      })
      .catch((error) => {
        console.error("Error creating event type:", error);
      });
  };
  return (
    <form onSubmit={handlesubmit}>
      <ToastContainer />

      <section className="overlay h-[100vh] w-[100vw] fixed top-0 left-0 right-0">
        <div className="container py-12  bg-white h-[100vh]  rounded-lg px-7 content-between w-[500px] flex-col absolute right-0 top-0">
          <div className="flex justify-between items-center pt-5">
            <h1 className="text-left text-[25px] mt-0">Event Creation</h1>
            <button onClick={() => setOverlay(false)}>
              <img
                className="h-[23px] w-[23px] text-right align-middle"
                src={close}
                alt="close-icon"
              />
            </button>
          </div>
          <div className="flex justify-center space-x-5 mt-2">
            <button
              onClick={() => setShowComponent(false)}
              className={
                showComponent
                  ? "text-[#B3B9C5]"
                  : "text-[#6572E1] font-semibold underline"
              }
            >
              Event Details
            </button>
            <button
              onClick={() => setShowComponent(true)}
              className={
                !showComponent
                  ? "text-[#B3B9C5]"
                  : "text-[#6572E1] font-semibold underline"
              }
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
                        <p className="text-[13px]">
                          Indefinitely in the future
                        </p>
                      </div>
                    </div>
                    <hr className="horizontal-line"></hr>
                    <div className="flex flex-col w-full items-start">
                      <h1 className="text-[15px] items-start">
                        Available hours
                      </h1>
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
                  <div className="flex flex-col   my-1 mr-[27px] max-sm:mt-0 w-full pt-0">
                    <label
                      htmlFor="event name"
                      className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                    >
                      Event Name
                    </label>
                    <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]">
                      <input
                        className="w-full"
                        type="event name"
                        name="name"
                        id=""
                        placeholder="Lorem Upsum..."
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {error.name && (
                    <span className="text-red-600 text-[11px] mt-3">
                      {error.name}
                    </span>
                  )}

                  <div className="firstlast flex justify-center w-full max-sm:flex-col mr-0 mb-0">
                    <div className="flex flex-col   my-0 mr-[27px] max-sm:mt-0 w-full pt-0">
                      <label
                        htmlFor="first name"
                        className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                      >
                        Start Date
                      </label>
                      <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]  ">
                        <DatePicker
                          className="w-full"
                          type="date"
                          name="startdate"
                          id=""
                          placeholder="Start Date"
                          selected={startDate}
                          onChange={(date) => handleStartDateChange(date)}
                        />
                      </div>
                      {error.startdate && (
                        <span className="text-red-600 text-[11px] mt-3">
                          {error.startdate}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
                      <label
                        htmlFor="last name"
                        className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                      >
                        End Date
                      </label>
                      <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-0">
                        <DatePicker
                          className="w-full"
                          type="date"
                          name="enddate"
                          id=""
                          placeholder="End Date"
                          selected={endDate}
                          onChange={(date) => handleEndDateChange(date)}
                        />
                      </div>
                      {error.enddate && (
                        <span className="text-red-600 text-[11px] mt-3">
                          {error.enddate}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
                    <label
                      htmlFor="event duration"
                      className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                    >
                      Duration
                    </label>
                    <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                      <img className="mr-2" src={clock} alt=""></img>
                      {/* <input
                        className="w-full"
                        type="Last name"
                        name="myinput"
                        id=""
                        placeholder="1h30min"
                        value={formData.duration}
                        onChange={handleChange}
                      /> */}
                      <select
                        className="w-full border-0 bg-transparent outline-none"
                        name="duration"
                        onChange={handleChange}
                        id=""
                      >
                        <option value="01">1 hour</option>
                        <option value="02">2 hour</option>
                        <option value="03">3 hour</option>
                      </select>
                    </div>
                  </div>
                  {error.duration && (
                    <span className="text-red-600 text-[11px] mt-3">
                      {error.duration}
                    </span>
                  )}
                </div>
                <h2 className="text-[#56647E] text-sm font-medium mb-2 text-[13px]">
                  Emplacement
                </h2>
                <div className="flex align-center justify-between space-x-3">
                  <label className=" flex justify-center items-center checkInput">
                    <input
                      type="radio"
                      name="meeting"
                      onChange={() =>
                        setFormData({
                          ...formData,
                          location: "zoom",
                        })
                      }
                    />
                    <div className="flex flex-col justify-center items-center rounded-lg w-[100px] h-[93px] EmplacementInput">
                      <img
                        className="max-h-full max-w-full mb-3"
                        src={video}
                        alt=""
                      ></img>
                      <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px]">
                        Zoom
                      </h2>
                    </div>
                  </label>
                  <label className=" flex justify-center items-center checkInput">
                    <input
                      onChange={() =>
                        setFormData({
                          ...formData,
                          location: "phone",
                        })
                      }
                      type="radio"
                      name="meeting"
                    />
                    <div className="flex flex-col justify-center items-center rounded-lg w-[100px] h-[93px] EmplacementInput">
                      <img
                        className="max-h-full max-w-full mb-3"
                        src={telephone}
                        alt=""
                      ></img>
                      <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px]">
                        Phone Call
                      </h2>
                    </div>
                  </label>{" "}
                  <label className=" flex justify-center items-center checkInput">
                    <input
                      onChange={() =>
                        setFormData({
                          ...formData,
                          location: "irl",
                        })
                      }
                      type="radio"
                      name="meeting"
                    />
                    <div className="flex flex-col justify-center items-center rounded-lg w-[100px] h-[93px] EmplacementInput">
                      <img
                        className="max-h-full max-w-full mb-3"
                        src={pin}
                        alt=""
                      ></img>
                      <h2 className="text-[#B3B9C5] text-sm font-medium mb-2 text-[13px] text-center">
                        In-person meeting
                      </h2>
                    </div>
                  </label>
                  {/* <button
                    className={
                      location === "Zoom"
                        ? "rounded-lg border-2 border-[#6572E1] w-[100px] h-[93px] flex justify-center items-center"
                        : "rounded-lg border-2 border-[#D8DBE1] w-[100px] h-[93px] flex justify-center items-center"
                    }
                    onClick={zoom}
                  >
                    
                  </button>
                  <button
                    className={
                      location === "Phone Call"
                        ? "rounded-lg border-2 border-[#6572E1] w-[100px] h-[93px] flex justify-center items-center"
                        : "rounded-lg border-2 border-[#D8DBE1] w-[100px] h-[93px] flex justify-center items-center"
                    }
                    onClick={phone}
                  >
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
                  <button
                    className={
                      location === "In Person Meeting"
                        ? "rounded-lg border-2 border-[#6572E1] w-[100px] h-[93px] flex justify-center items-center"
                        : "rounded-lg border-2 border-[#D8DBE1] w-[100px] h-[93px] flex justify-center items-center"
                    }
                    onClick={irl}
                  >
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
                  </button> */}
                </div>
                {error.location && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {error.location}
                  </span>
                )}
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
                  <div className="flex justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-[50px]">
                    <input
                      className="w-full h-full p-0 m-0 align-top text-left"
                      type="text"
                      name="description"
                      placeholder="Lorem Upsum..."
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                {error.description && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {error.description}
                  </span>
                )}
              </>
            )}

            <div className="flex space-x-12 mt-auto">
              <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
                <div className="flex items-center flex-col justify-center w-full mx-auto">
                  <button
                    className="btn-primary-b border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
                    onClick={() => {
                      setOverlay(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
                <div className="flex items-center flex-col justify-center w-full mx-auto">
                  <button
                    type="submit"
                    onClick={handlesubmit}
                    className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
export default NewEventSidebar;
