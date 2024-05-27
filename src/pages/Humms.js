import React from "react";
import Header from "../component/Header";

import HummsClubLogo from "../assets/HummsClub.png";
import HummsClubComponent from "../component/HummsClubComponent";

const Humms = () => {
  return (
    <div className="bg-[#f7f7f7f0] ">
      <Header />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#c33838] text-center tracking-wide -pt-10">
        Welcome <span>to HUMMS</span>
      </h1>
      <div className="flex justify-center -mt-1 mb-10">
        <img className="max-w-full h-auto  " src={HummsClubLogo} />
      </div>
      <HummsClubComponent />
    </div>
  );
};

export default Humms;
