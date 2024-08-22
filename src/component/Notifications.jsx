import React from "react";
import { motion } from "framer-motion";

const Notifications = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="absolute top-[17px] right-[50px] flex flex-col gap-2 bg-[#fff] h-screen w-[20em] rounded-md "
    >
      <h1 className="text-center text-[30px] font-bold bg-blue-600 text-[#fff] rounded-md">
        Notifications
      </h1>
      <div className="flex flex-col gap-4 p-3">
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
        <div className="bg-yellow-400 p-4 w-full rounded-md py-1 h-[2em]"></div>
      </div>
    </motion.div>
  );
};

export default Notifications;
