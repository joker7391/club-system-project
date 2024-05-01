import React from "react";
import { motion } from "framer-motion";

const Notifications = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="absolute top-16 right-0 flex flex-col justify-between gap-3  bg-[#fff] h-screen w-[20em] "
    >
      <h1 className="text-center text-[30px] font-bold bg-blue-600 text-[#fff]">
        Notifications
      </h1>

      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]">
        pak u justine
      </div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
    </motion.div>
  );
};

export default Notifications;
