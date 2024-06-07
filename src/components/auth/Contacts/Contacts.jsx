import React from "react";
import user from "../../../assets/icon/user.svg";
import search from "../../../assets/icon/search.svg";
import print from "../../../assets/icon/print.svg";
import plusplus from "../../../assets/icon/plusplus.svg";
import ellipse from "../../../assets/icon/ellipse.svg";
import menu from "../../../assets/icon/menu.svg";
import map from "../../../assets/icon/map.svg";
import Topbar from "../../navbars/Topbar";
import Sidebar from "../../navbars/Sidebar";

function Contacts() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="text-between pt-[100px] ml-[6%] flex">
        <div className="flex items-baseline justify-between w-full">
          <div className="flex space-x-2 ml-3">
            <img src={user} alt="" className="pt-[8px]" />
            <h1 className="text text-[25px] text-center">Liste des contacts</h1>
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
              ></input>
            </div>
            <button className="btn-icon bg-[#FFFFFF] border p-4 flex items-center w-10 h-10 mr-4">
              <img className="items-center" src={print} alt="settings" />
            </button>

            <button className="btn-secondary border p-4 flex items-center mx-2">
              <img src={plusplus} alt="" />
              Create Contact
            </button>
          </div>
        </div>
      </div>
      <div className="text-between pt-[10px] ml-[8%] flex">
        <div className="items-center justify-between bg-transparent px-5 p-3 rounded-lg border border-[#DFE1E7] h-[130px] w-[350px] my-10">
          <div className="flex items-center justify-between">
            <img src={ellipse} alt="" />
            <div className="flex flex-col">
              <p className="text-[#56647E] text-[13px] font-medium">
                Hicham El airaje
              </p>
              <p className="text-[#919AAB] text-[13px]">
                hichamelairaje@gmail.com
              </p>
              <p className="text-[#919AAB] text-[13px]">+2120663526352</p>
            </div>
            <button>
              <img src={menu} alt="" />
            </button>
          </div>
          <hr className="horizontal-line-contacts my-3"></hr>
          <div className="flex items-center justify-start">
            <img src={map} alt="" className="mx-1" />
            <p className="text-[#919AAB] text-[13px]">Casablanca</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
