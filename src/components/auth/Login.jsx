import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import "../../Styles/HomePage.css";
import google from "../../assets/icon/google.svg";
import iconeuser from "../../assets/icon/iconeuser.svg";
import lock from "../../assets/icon/lock.png";
import Imageflex from "../../assets/icon/Imageflex.png";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(user);
  let isValid = true;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateUser = () => {
      if (!formData.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is required",
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
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
    };
    validateUser();

    if (isValid) {
      setUser({
        email: formData.email,
        password: formData.password,
      });
      axios
        .post("https://localhost:7210/api/Authenticate/Login", user)
        .then((response) => setLoggedIn(true))
        .catch((error) => console.error("Error fetching register:", error));
      console.log("Logged in successfully !");
    } else {
      console.log("Login failed hhh");
    }
    if (loggedIn) {
      return <Navigate to="/Dashboard" />;
    }
  };

  return (
    <div className="app">
      <div className="left-pane">
        <div className="max-sm:m-10">
          <h1 className="mt-14 text-[31px]"> Identify </h1>
          <p className="text-[15px] mt-1">
            Enter your email address and password to <br /> access the account.
          </p>
          <form className=" flex items-center flex-col">
            <div className="flex flex-col w-96 max-sm:w-80 my-2">
              <label
                htmlFor="email"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px] mt-5"
              >
                E-mail Address
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] mb-4">
                <input
                  className="w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="Lorem Upsum..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <img src={iconeuser} alt="" />
              </div>
            </div>
            {errors.email && (
              <span className="text-red-600 text-[11px] mt-3">
                {errors.email}
              </span>
            )}

            <div className="flex flex-col w-96 max-sm:w-80 ">
              <label
                htmlFor="password"
                className="text-[#56647E] text-sm font-medium mb-2 text-[13px]"
              >
                Password
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7]">
                <input
                  className="w-full"
                  type="password"
                  name=""
                  id=""
                  placeholder="•••••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <img src={lock} alt="" />
              </div>
            </div>
            {errors.password && (
              <span className="text-red-600 text-[11px] mt-3">
                {errors.password}
              </span>
            )}
          </form>
          <div className="password flex justify-center items-center  mb-8 mt-2 text-[13px]">
            <a className="link  text-center" href="link">
              Forgot your password ?
            </a>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center">
              <button
                className="btn-primary border p-4 flex items-center w-96 max-sm:w-80"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <p className="text-[13px] mt-3"> Login with </p>
            <button className="btn-google border p-4 flex items-center">
              <img src={google} alt="" />
              Google
            </button>
            <div className="container mt-10 text-[13px]">
              <p> You do not have an account ?</p>
              <a href="link">
                <Link to={`/Register`}> Register </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-pane max-sm:d-none">
        <img src={Imageflex} alt="" className="img-flex w-full max-h-full" />
      </div>
    </div>
  );
}

export default Login;
