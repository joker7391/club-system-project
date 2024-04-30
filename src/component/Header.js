import React from "react";
import { LuLogOut } from "react-icons/lu";
import Logout from "./Logout";
import clubData from "../assets/shs-logo.png";

const Header = () => {
  return (
    <div className="p-5 bg-blue-700 flex justify-between">
      <div className="flex items-center gap-3">
        <h1 className="font-extrabold text-[30px] text-[#fff]">STI CLUB</h1>
        <img
          className="w-[3em] h-[3em] bg-yellow-400 rounded-full"
          src={clubData}
          alt="logo"
        />
      </div>
      <Logout />
    </div>
  );
};

export default Header;
