import React from "react";
import { clubData } from "../assets/data";

const ClubPicker = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {clubData.map((club, index) => (
        <div
          key={index}
          className="w-full bg-blue-700 rounded-lg p-2 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <h1 className="bg-yellow-400 rounded-md w-16 h-10 text-center font-bold text-[25px] text-[#fff]">
              {club.id}
            </h1>

            <h1 className="text-[25px] text-[#fff] font-bold">{club.club}</h1>
          </div>
          <div className="flex gap-4">
            <button className="text-[#fff] text-[25px] font-semibold">
              Join
            </button>
            <button className="text-[#fff] text-[25px] font-semibold">
              Visit
            </button>
            <button className="text-[#fff] text-[25px] font-semibold">
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubPicker;
