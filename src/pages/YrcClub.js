import React from "react";
import Header from "../component/Header";
import YrcClubComponent from "../component/YrcClubComponent";

const YrcClub = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-center h-screen bg-no-repeat bg-[#1a1919da] w-full lg:w-auto">
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#e0e04b] text-center tracking-wide">
          Welcome <span>Kupal</span>
        </h1>
      </div>
      <YrcClubComponent />
    </div>
  );
};

export default YrcClub;
