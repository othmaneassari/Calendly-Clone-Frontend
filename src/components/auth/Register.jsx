import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
import iconeuser from "../../assets/icon/iconeuser.svg";
import lock from "../../assets/icon/lock.png";
import Imageflex from "../../assets/icon/Imageflex.png";

function Register() {
  return (
    <div className="app">
      <div className="left-pane justify-center flex flex-col">
        <div>
          <h1 className=" text-[31px]"> Create Account </h1>
          <p className="text-[15px] text-[#B3B9C5] mt-1 max-sm:px-14 max-sm: w-full pb-0">
            Enter your email address and we'll send you an email with <br />
            with instructions on how to reset your password.
          </p>
          <form className=" flex items-center flex-col justify-center max-w-[70%] mx-auto">
            <div className="firstlast flex justify-center w-full max-sm:flex-col mr-0 mb-0">
              <div className="flex flex-col w-[285px]  my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
                <label
                  htmlFor="first name"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
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
              <div className="flex flex-col w-[285px]  my-2 max-sm:mt-0 w-full">
                <label
                  htmlFor="last name"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
                >
                  Last Name
                </label>
                #hh
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
            <div className="firstlast flex justify-center w-full max-sm:flex-col mr-0">
              <div className="flex flex-col w-full max-sm:mt-0 w-full">
                <label
                  htmlFor="email"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-2"
                >
                  Business Email
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <input
                    className="w-full"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="password language flex justify-center w-full max-sm:flex-col mr-0">
              <div className="flex flex-col w-[285px]  my-2 mr-[27px] max-sm:mt-0 w-full">
                <label
                  htmlFor="password"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px]"
                >
                  Password
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <input
                    className="w-full"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[285px]  my-2 max-sm:mt-0 w-full">
                <label
                  htmlFor="confirm password"
                  className="text-[#56647E] text-sm font-medium mb-2 text-[13px]"
                >
                  Confirm password
                </label>
                <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                  <input
                    className="w-full"
                    type="Confirm password"
                    name=""
                    id=""
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>
            {/* 
            <div className="flex flex-col w-full  my-2">
              <label
                htmlFor="preferred language"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px]"
              >
                Preferred language
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                <input
                  className="w-full max-sm:w-full mt-0"
                  type="preferred language"
                  name=""
                  id=""
                  placeholder="Preferred Language"
                />
              </div>
            </div> */}
          </form>
          <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
            <div className="flex items-center flex-col justify-center w-full mx-auto">
              <button className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 ">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-pane max-sm:hidden">
        <img src={Imageflex} alt="" className="img-flex w-full max-h-full" />
      </div>
    </div>
  );
}

export default Register;
