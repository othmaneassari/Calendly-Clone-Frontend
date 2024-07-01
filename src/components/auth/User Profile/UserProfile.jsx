import React, { Component, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Topbar from "../../navbars/Topbar";
import Sidebar from "../../navbars/Sidebar";
import JPM from "../../../assets/icon/JPM.png";
import { ReactCountryDropdown } from "react-country-dropdown";
import "react-country-dropdown/dist/index.css";
import { useParams } from "react-router-dom";
function UserProfile(item) {
  const [newCountry, setNewCountry] = useState("");
  const { id } = useParams();

  const handleCountryChange = (country) => {
    setNewCountry(country);
    setFormData({ ...formData, country: country.name });
  };

  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    biography: "",
    language: "",
    dateformat: "",
    datetimeformat: "",
    country: "",
    timezone: "",
  });

  const [error, setError] = useState({
    name: "",
    duration: "",
    description: "",
    location: "",
    startdate: "",
    enddate: "",
  });

  useEffect(() => {
    axios
      .get(`https://localhost:7210/api/Users/${id}`)
      .then((response) => {
        setFormData({ ...response.data, userId: response.data.id });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://localhost:7210/api/Users", formData)
      .then((response) => {
        console.log(response);
        console.log(formData);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error creating event type:", error);
        toast.error("Failed to update the user's profile. Please try again.");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Topbar />
      <Sidebar />
      <div className="text-between pt-[100px] ml-[6%] flex">
        <div className="flex-col items-baseline justify-between w-full">
          <div className="flex space-x-2 ml-10">
            <h1 className="text text-[25px] text-center mt-3">Profile</h1>
          </div>
          <div className="flex space-x-2 ml-10 mt-10 items-center">
            <img
              className="items-center rounded-[50%] mr-4 space-x-4 space-y-4 w-[100px] h-[100px]"
              src={JPM}
              alt="profile"
            />
            <div className="flex-col">
              <button className="btn-google border p-4 flex items-center mx-2">
                Upload Picture
              </button>
              <p className="text-[12px]">JPG, GIF or PNG. Max size of 5MB.</p>
            </div>
          </div>
          <div className="flex flex-col my-2 mx-10 mr-[27px] max-sm:mt-0 w-[25%] pt-0">
            <label
              htmlFor="first name"
              className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
            >
              Name
            </label>
            <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]  ">
              <input
                className="w-full"
                type="first name"
                name="name"
                id=""
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col   my-2 max-sm:mt-0 w-full pt-0">
              <label
                htmlFor="event name"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
              >
                Biography
              </label>
              <div className="flex justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-[100px]">
                <input
                  className="w-full h-full p-0 m-0 align-top text-left"
                  type="text"
                  name="biography"
                  placeholder="Lorem Upsum..."
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
              <label
                htmlFor="language"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
              >
                Language
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                <select
                  className="w-full border-0 bg-transparent outline-none"
                  name="language"
                  id=""
                  onChange={handleChange}
                >
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                  <option value="german">German</option>
                  <option value="portuguese">Portuguese</option>
                </select>
              </div>
            </div>
            <div className="flex item-center space-x-3">
              <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
                <label
                  htmlFor="date format"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Date Format
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <select
                    className="w-full border-0 bg-transparent outline-none"
                    name="dateformat"
                    id=""
                    onChange={handleChange}
                  >
                    <option value="mm">MM/DD/YYYY</option>
                    <option value="dd">DD/MM/YYYY</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
                <label
                  htmlFor="datetimeformat"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
                >
                  Time Format
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <select
                    className="w-full border-0 bg-transparent outline-none"
                    name="datetimeformat"
                    id=""
                    onChange={handleChange}
                  >
                    <option value="12">12h(am-pm)</option>
                    <option value="24">24h</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
              <label
                htmlFor="country"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
              >
                Country
              </label>
              <div>
                <ReactCountryDropdown
                  name="country"
                  selected={newCountry}
                  onSelect={handleCountryChange}
                />
              </div>
            </div>
            <div className="flex flex-col  my-0 max-sm:mt-0 w-full">
              <label
                htmlFor="timezone"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-3"
              >
                Time Zone
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                <select
                  className="w-full border-0 bg-transparent outline-none"
                  name="timezone"
                  id=""
                  onChange={handleChange}
                >
                  <option value="UTC-12:00">UTC-12:00 (Baker Island)</option>
                  <option value="UTC-11:00">UTC-11:00 (American Samoa)</option>
                  <option value="UTC-10:00">UTC-10:00 (Hawaii)</option>
                  <option value="UTC-09:00">UTC-09:00 (Alaska)</option>
                  <option value="UTC-08:00">
                    UTC-08:00 (Pacific Time, US & Canada)
                  </option>
                  <option value="UTC-07:00">
                    UTC-07:00 (Mountain Time, US & Canada)
                  </option>
                  <option value="UTC-06:00">
                    UTC-06:00 (Central Time, US & Canada)
                  </option>
                  <option value="UTC-05:00">
                    UTC-05:00 (Eastern Time, US & Canada)
                  </option>
                  <option value="UTC-04:00">
                    UTC-04:00 (Atlantic Time, Canada)
                  </option>
                  <option value="UTC-03:00">
                    UTC-03:00 (Argentina, Brazil)
                  </option>
                  <option value="UTC-02:00">
                    UTC-02:00 (South Georgia/Sandwich Islands)
                  </option>
                  <option value="UTC-01:00">UTC-01:00 (Azores)</option>
                  <option value="UTC+00:00">UTC+00:00 (GMT, London)</option>
                  <option value="UTC+01:00">
                    UTC+01:00 (Central European Time)
                  </option>
                  <option value="UTC+02:00">
                    UTC+02:00 (Eastern European Time)
                  </option>
                  <option value="UTC+03:00">UTC+03:00 (Moscow, Nairobi)</option>
                  <option value="UTC+04:00">UTC+04:00 (Dubai)</option>
                  <option value="UTC+05:00">
                    UTC+05:00 (Pakistan, Uzbekistan)
                  </option>
                  <option value="UTC+06:00">
                    UTC+06:00 (Bangladesh, Kazakhstan)
                  </option>
                  <option value="UTC+07:00">
                    UTC+07:00 (Bangkok, Vietnam)
                  </option>
                  <option value="UTC+08:00">
                    UTC+08:00 (China, Singapore)
                  </option>
                  <option value="UTC+09:00">UTC+09:00 (Japan, Korea)</option>
                  <option value="UTC+10:00">UTC+10:00 (Sydney, Guam)</option>
                  <option value="UTC+11:00">UTC+11:00 (Solomon Islands)</option>
                  <option value="UTC+12:00">
                    UTC+12:00 (Fiji, New Zealand)
                  </option>
                  <option value="UTC+13:00">UTC+13:00 (Tonga)</option>
                  <option value="UTC+14:00">UTC+14:00 (Line Islands)</option>
                </select>
              </div>
            </div>
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
                  <button
                    type="submit"
                    className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserProfile;
