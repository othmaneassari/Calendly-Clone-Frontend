import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../../Styles/HomePage.css";

import Imageflex from "../../assets/icon/Imageflex.png";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerfn = () => {
    // retrieve the form data and set the formdata state
    console.log(formData);

    // valaidate the form data
    let isValid = true;
    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      re.test(email);
    };
    const isValidPassword = (password) => {
      const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
      const digitRegex = /\d/;
      const uppercaseRegex = /[A-Z]/;
      nonAlphanumericRegex.test(password);
      digitRegex.test(password);
      uppercaseRegex.test(password);
    };
    const validateUser = () => {
      if (!formData.username) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "First Name is required",
        }));
        isValid = false;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "",
        }));
      }
      if (!formData.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is required",
        }));
        isValid = false;
      } else if (isValidEmail(formData.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid Email Address",
        }));
        isValid = false;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }

      if (!formData.password) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password is required",
        }));
        isValid = false;
      } else if (isValidPassword(formData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Invalid Password",
        }));
        isValid = false;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
      if (formData.password !== formData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Password and Confirm Password do not match",
        }));
        isValid = false;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "",
        }));
      }

      if (isValid) {
        setUser({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        axios
          .post("https://localhost:7210/api/Authenticate/register", user)
          .then((response) => setIsRegistered(true))
          .catch((error) => console.error("Error fetching login:", error));
        console.log("Registered successfully !");
      } else {
        console.log("Registration failed hhh");
      }
    };
    validateUser();

    // add the errors from form data
    // add the errors from the response and set the errror json to it
    // check if the formdata is valid and set the user to from data needed
    // send the request

    // check if the all the imput are valid and no error showed
    // set the user state to the valid data from form data
    // send the request to db with user state after verifing thats everthing work and valid
  };
  if (isRegistered) {
    return <Navigate to="/Login" />; // Use Navigate for redirection
  }

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
              <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full pt-0">
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
                    value={formData.username}
                    onChange={(event) =>
                      setFormData({ ...formData, username: event.target.value })
                    }
                  />
                </div>
                {errors.username && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {errors.username}
                  </span>
                )}
              </div>
              <div className="flex flex-col  my-2 max-sm:mt-0 w-full">
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
              <div className="flex flex-col  max-sm:mt-0 w-full">
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
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="password language flex justify-center w-full max-sm:flex-col mr-0">
              <div className="flex flex-col   my-2 mr-[27px] max-sm:mt-0 w-full">
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
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                </div>
                {errors.password && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col   my-2 max-sm:mt-0 w-full">
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
                    // value={formData.confirmPassword || ""}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        confirmPassword: event.target.value,
                      })
                    }
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-600 text-[11px] mt-3">
                    {errors.confirmPassword}
                  </span>
                )}
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
