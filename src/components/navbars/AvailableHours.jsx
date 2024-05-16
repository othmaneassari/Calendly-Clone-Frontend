import React from "react";
import back from "../../assets/icon/back.svg";
import write from "../../assets/icon/write.svg";
import close from "../../assets/icon/close.svg";

function AvailableHours() {
  return (
    <section className="overlay h-[100vh] w-[100vw] fixed top-0 left-0 right-0">
      <div className="bg-[#F9F9FE] h-[100vh]  rounded-lg px-7 content-between w-[500px] flex-col absolute right-0 top-0">
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-left text-[25px] mt-0">Event Creation</h1>
          <img
            className="h-[23px] w-[23px] text-right align-middle"
            src={close}
            alt="close-icon"
          ></img>
        </div>
        <div className="flex justify-center space-x-5 mt-2 mb-2">
          <button className="text-[#B3B9C5]">Event Details</button>
          <button className="text-[#6572E1] font-semibold underline">
            Scheduling Settings
          </button>
        </div>
        <form className=" flex items-center flex-col justify-center max-w-[100%]">
          <div className="flex items-center w-full text-[#56647E] text-[15px] justify-between mt-5 mb-5">
            <button>
              <img className="mr-2" src={back} alt=""></img>
            </button>
            <h2 className="flex-grow font-semibold">Available Hours</h2>
            <button>
              <img className="ml-2" src={write} alt=""></img>
            </button>
          </div>
          <div className="bg-[#F7F7F9] px-5 p-3 rounded-lg border border-[#DFE1E7] h-full w-full mb-5">
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Monday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Tuesday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Wednesday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Thursday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Friday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Saturday</h2>
              <h2>9am - 5pm</h2>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="flex justify-between text-[13px] text-[#56647E] font-semibold ">
              <h2>Sunday</h2>
              <h2>9am - 5pm</h2>
            </div>
          </div>
          <div className="flex space-x-12">
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary-b border p-4 flex items-center w-full max-sm:mr-0">
                  Cancel
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[70%] m-auto">
              <div className="flex items-center flex-col justify-center w-full mx-auto">
                <button className="btn-primary border p-4 flex items-center w-full max-sm:mr-0">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AvailableHours;
