import React from "react";
import Logout from "./Logout";
import clubData from "../assets/clubLOGO.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="p-3 bg-blue-700 flex justify-between">
      <div className="flex items-center gap-3">
        <h1
          onClick={handleHome}
          className="font-extrabold text-[30px] text-[#fff] cursor-pointer"
        >
          STI CLUB
        </h1>
        <img className="w-[4em] h-[4em] " src={clubData} alt="logo" />
      </div>
      <Logout />
    </div>
  );
};

export default Header;
