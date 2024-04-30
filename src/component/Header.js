import React from "react";
import { LuLogOut } from "react-icons/lu";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="p-5 bg-blue-700 flex justify-between">
      <div className="flex items-center gap-3">
        <h1 className="font-extrabold text-[30px] text-[#fff]">STI CLUB</h1>
        <div className="w-16 h-10 bg-yellow-400 rounded-3xl"></div>
      </div>
      <Logout />
    </div>
  );
};

export default Header;
