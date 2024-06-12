import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Topbar from "../../navbars/Topbar";
import Sidebar from "../../navbars/Sidebar";
import EventTypesBox from "./EventTypesBox";
import EditEventSidebar from "./EditEventSidebar";
import axios from "axios";
import search from "../../../assets/icon/search.svg";
import print from "../../../assets/icon/print.svg";
import plusplus from "../../../assets/icon/plusplus.svg";

function EventTypesList() {
  const [boxes, setBoxes] = useState([]);
  const [filter, setFilter] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:7210/api/EventTypes/find-eventtype")
      .then((response) => {
        setBoxes(response.data);
        console.log("hehhe");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [refresh]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredBoxes = boxes.filter((box) =>
    box.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <Topbar />
      <ToastContainer />

      <Sidebar />
      <div className="pt-[100px] ml-[6%]">
        <div className="flex items-baseline justify-between w-full">
          <div className="flex space-x-2 ml-3">
            <h1 className="text text-[25px] text-center">Event Types</h1>
          </div>
          <div className="flex space-x-2 mr-4">
            <div className="flex items-center justify-between bg-transparent px-2 p-3 rounded-lg border border-[#DFE1E7] mb-4 w-[382px]">
              <img src={search} alt="" className="pr-2" />
              <input
                className="w-full"
                type="Search"
                name=""
                id=""
                placeholder=""
                value={filter}
                onChange={handleFilterChange}
              ></input>
            </div>
            <button className="btn-icon bg-[#FFFFFF] border p-4 flex items-center w-10 h-10 mr-4">
              <img className="items-center" src={print} alt="settings" />
            </button>

            <button className="btn-secondary border p-4 flex items-center mx-2">
              <img src={plusplus} alt="" />
              Create Event Type
            </button>
          </div>
        </div>
        <div className="flex pt-[10px]">
          {filteredBoxes.map((box) => (
            <EventTypesBox
              key={box.id}
              box={box}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          ))}
          {/* <div className="items-center justify-between bg-transparent px-5 p-3 rounded-lg border border-[#DFE1E7] h-[150px] w-[350px] my-5 mx-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[#56647E] text-[13px] font-medium">
                  {eventname}
                  Event Type Name
                </p>
                <p className="text-[#919AAB] text-[13px]">{duration}2 hours</p>
                <p className="text-[#919AAB] text-[13px]">{location}Zoom Meeting</p>
              </div>
              <button>
                <img src={menu} alt="" />
              </button>
            </div>
            <hr className="horizontal-line-contacts my-2"></hr>
            <div className="flex items-center justify-between">
              <button>
                <p className="text-[#919AAB] text-[13px]">Copy Link</p>
              </button>
              <button className="btn-eventtype border p-4 flex items-center">
                <p>Share</p>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {overlay && (
        <EditEventSidebar
          overlay={overlay}
          setOverlay={setOverlay}
          setRefresh={setRefresh}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </div>
  );
}

export default EventTypesList;
