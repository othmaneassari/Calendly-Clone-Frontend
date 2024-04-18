import React from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/icon/plus.svg";

export default function Guide() {
  return (
    <section className="p-10">
      <div className="p-16 bg-black rounded-2xl ">
        <h1 className="text-xxl font-semibold text-white">Style Guide</h1>
      </div>
      <div>
        <button>Lorem, ipsum.</button>
        <button className="btn-primary border p-4 flex items-center">
          <img src={plus} alt="" />
          Lorem, ipsum.
        </button>
      </div>
      <div>
        <button>Lorem, ipsum.</button>
        <button className="btn-primary border p-4 flex items-center">
          Lorem, ipsum.
        </button>
      </div>
      <div>
        <button></button>
        <button className="btn-icon border p-4 flex items-center">
          <img src={plus} alt="" />
        </button>
      </div>
      <div>
        <Link> Home </Link>
        <Link
          className="button p-4 bg-blue-900 rounded-lg px-6 text-white"
          to={`/`}
        >
          {" "}
          Go to Home
        </Link>
      </div>
    </section>
  );
}
