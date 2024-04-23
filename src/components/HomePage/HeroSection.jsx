import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";

function HeroSection() {
  return (
    <div className="h-[100vh] biu flex flex-col justify-center items-center">
      <h1> Hero Section </h1>
      <Link
        className="button p-4 mb-4 bg-blue-900 rounded-lg px-6 text-white"
        to={"/Login"}
      >
        Go Login
      </Link>
      <Link
        className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
        to={"/Register"}
      >
        Go Register
      </Link>

      <Link
        className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
        to={`/Dashboard`}
      >
        Go to Dashboard
      </Link>
      <Link
        className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
        to={`/Guide`}
      >
        Go to Guide
      </Link>
      <Link
        className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
        to={`/Calendar`}
      >
        Go to Calendar
      </Link>
      <div className="boxSection">
        <div className="box1">test1</div>
        <div className="box2">test2</div>
        <div className="box2">test3</div>
        <div className="box2">test3</div> <div className="box2">test3</div>{" "}
        <div className="box2">test3</div>
      </div>
    </div>
  );
}

export default HeroSection;
