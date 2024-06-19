import React, { useContext } from "react";

import { AuthContext } from "../index";
import { useNavigate } from "react-router-dom";
import SSAlogo from "../assets/image7.jpg";
import { IoPersonCircleOutline } from "react-icons/io5";

const SSA = () => {
  const { userData } = useContext(AuthContext);
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
          SSA
        </h1>
        <img className="w-[4em] h-[4em] rounded-md" src={SSAlogo} alt="logo" />
      </div>
      <div className="flex gap-4 items-center text-[#fff]">
        <h4 className="text-[20px] font-semibold py-1 text-[#fff]">
          {userData?.name || "User"}
        </h4>
        <button className="text-[40px]">
          <IoPersonCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default SSA;
