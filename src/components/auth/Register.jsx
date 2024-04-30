import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
import iconeuser from "../../assets/icon/iconeuser.svg";
import lock from "../../assets/icon/lock.png";
import Imageflex from "../../assets/icon/Imageflex.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const registerfn = () => {
    console.log(user, errors);
    //logic and validation
    const validateUser = (data) => {
      const errors = {};
      if (!data.firstName.trim()) {
        errors.firstName = "First Name is required";
      }
      if (!data.lastName.trim()) {
        errors.lastName = "Last Name is required";
      }
      if (!data.email.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(data.email)) {
        errors.email = "Invalid Email Address";
      }
      if (!data.password) {
        errors.password = "Password is required";
      } else if (!isValidPassword(data.password)) {
        errors.password = "Invalid Email Address";
      }
      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Password and Confirm Password do not match";
      }
      return errors;
    };
    if (Object.keys(validateUser).length === 0) {
      console.log("Registered succesfully !", user);
    } else {
      setErrors(validateUser);
    }

    const isValidEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const isValidPassword = (password) => {
      const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
      const digitRegex = /\d/;
      const uppercaseRegex = /[A-Z]/;
      return nonAlphanumericRegex.test(password);
      return digitRegex.test(password);
      return uppercaseRegex.test(password);
    };

    // send reqrest
    //   axios
    //     .post("https://localhost:7210/api/Authenticate/register", user)
    //     .then((response) => console.log(response.data))
    //     .catch((error) => console.error("Error fetching login:", error));
  };

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:7210/WeatherForecast")
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.error("Error fetching login:", error));
  // }, []);

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
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
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
                    onChange={(event) =>
                      setUser({ ...user, password: event.target.value })
                    }
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
              <button
                onClick={registerfn}
                className="btn-primary border p-4 flex items-center w-full max-sm:mr-0 mb-5 "
              >
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
