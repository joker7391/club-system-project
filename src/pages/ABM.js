import React from "react";
import Header from "../component/Header";

import AbmClubLogo from "../assets/image6.jpg";
import ABMclubComponent from "../component/ABMclubComponent";

const ABM = () => {
  return (
    <div className="bg-[#f7f7f7f0] ">
      <Header />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#3a7db8] text-center tracking-wide -pt-10">
        Welcome <span>to ABM</span>
      </h1>
      <div className="flex justify-center -mt-3 mb-10">
        <img className="max-w-full h-auto  " src={AbmClubLogo} />
      </div>
      <ABMclubComponent />
    </div>
  );
};

export default ABM;
