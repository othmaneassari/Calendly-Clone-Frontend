import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
import google from "../../assets/icon/google.svg";
import iconeuser from "../../assets/icon/iconeuser.svg";
import lock from "../../assets/icon/lock.png";
import Imageflex from "../../assets/icon/Imageflex.png";

function Login() {
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
                />
                <img src={iconeuser} alt="" />
              </div>
            </div>

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
                />
                <img src={lock} alt="" />
              </div>
            </div>
          </form>
          <div className="password flex justify-center items-center  mb-8 mt-2 text-[13px]">
            <a className="link  text-center" href="link">
              Forgot your password ?
            </a>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center">
              <button className="btn-primary border p-4 flex items-center w-96 max-sm:w-80">
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
