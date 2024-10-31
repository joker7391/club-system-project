import React from "react";
import Logout from "./Logout";
import clubData from "../assets/clubLOGO.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="px-2 py-2 bg-blue-700 flex justify-between">
      <div className="flex items-center gap-3">
        <h1
          onClick={handleHome}
          className="font-extrabold text-[30px] text-[#fff] cursor-pointer"
        >
          CLUB COLLECTIVE
        </h1>
        <img className="w-[4em] h-[4em] " src={clubData} alt="logo" />
      </div>
      <div className="flex gap-4 items-center text-[#fff]">
        <Logout />
        <button className="text-[40px]">
          <IoPersonCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default Header;
