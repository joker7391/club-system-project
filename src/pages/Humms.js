import React from "react";
import Header from "../component/Header";

import HummsClubLogo from "../assets/HummsClub.png";
import HummsClubComponent from "../component/HummsClubComponent";

const Humms = () => {
  return (
    <div className="">
      <Header />
      <div
        className="bg-center h-screen bg-no-repeat bg-[#ffffff] w-full lg:w-auto"
        style={{ backgroundImage: `url(${HummsClubLogo})` }}
      >
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#c33838] text-center tracking-wide">
          Welcome <span>HUMMS</span>
        </h1>
      </div>
      <HummsClubComponent />
    </div>
  );
};

export default Humms;
