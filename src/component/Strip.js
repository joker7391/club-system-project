import React, { useState, useContext } from "react";
import { FaRegCalendarAlt, FaBell } from "react-icons/fa";
import Notifications from "./Notifications";
import { AuthContext } from "../index";

const Strip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useContext(AuthContext);

  const openNotif = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-2 flex justify-between relative border-b-[2px] border-gray-300 shadow-lg">
      <div className="px-2">
        <h2 className="text-[20px] font-extrabold ">Dashboard</h2>
        <h2 className="text-[20px] font-semibold">
          WELCOME {userData?.name || "User"}
        </h2>
      </div>
      <div className="flex gap-4">
        {isOpen && <Notifications />}
        <button onClick={openNotif} className="text-[40px]">
          <FaBell />
        </button>

        <button className="text-[40px]">
          <FaRegCalendarAlt />
        </button>
      </div>
    </div>
  );
};

export default Strip;
