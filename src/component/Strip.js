import React, { useState } from "react";
import { FaRegCalendarAlt, FaBell } from "react-icons/fa";
import Notifications from "./Notifications";

const Strip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNotif = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-2 flex justify-between relative">
      <div className="px-2">
        <h2 className="text-[20px] font-extrabold ">Dashboard</h2>
        <h2 className="text-[20px] font-semibold">HOMEPAGE</h2>
      </div>
      <div className="flex gap-4">
        <button onClick={openNotif} className="text-[40px]">
          <FaBell />
        </button>

        <button className="text-[40px]">
          <FaRegCalendarAlt />
        </button>
      </div>
      {isOpen && <Notifications />}
    </div>
  );
};

export default Strip;
