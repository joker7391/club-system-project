import React from "react";
import { FaRegCalendarAlt, FaBell } from "react-icons/fa";

const Strip = () => {
  return (
    <div className="p-3 flex justify-between">
      <div className="px-2">
        <h2 className="text-[20px] font-extrabold ">Dashboard</h2>
        <h2 className="text-[20px] font-semibold">HOMEPAGE</h2>
      </div>
      <div className="flex gap-4">
        <button className="text-[40px]">
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
