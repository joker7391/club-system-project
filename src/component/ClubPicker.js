import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { clubData } from "../assets/data";

const ClubPicker = () => {
  const navigate = useNavigate();

  const handleVisit = (clubName) => {
    navigate(`/${clubName.toLowerCase()}`);
  };

  return (
    <div className="flex flex-wrap gap-12 p-24 w-[80em]">
      {clubData.map((club, index) => (
        <div
          key={index}
          className="w-[20em] h-[18em] bg-blue-700 rounded-md py-6 flex flex-col items-center gap-2"
        >
          <div className="w-[8em]">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={club.id}
              className="bg-yellow-400 rounded-full w-full"
            />
            <h1 className="text-[30px] text-[#fff] font-extrabold text-center py-3 underline">
              {club.club}
            </h1>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
            >
              Join
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleVisit(club.club)}
              className="text-[#090612] text-[25px] font-bold bg-yellow-400 px-3 rounded-md"
            >
              Visit
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubPicker;
