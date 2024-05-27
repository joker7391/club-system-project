import React from "react";
import Header from "../component/Header";
import StemClubLogo from "../assets/StemClub.png";
import StemClubComponent from "../component/StemClubComponent";

const Stem = () => {
  return (
    <div className="bg-[#a8f8947f] ">
      <Header />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide -pt-10">
        Welcome <span>to STEM</span>
      </h1>
      <div className="flex justify-center mt-5 mb-20">
        <img className="max-w-s h-auto w-1/3  " src={StemClubLogo} />
      </div>
      <StemClubComponent />
    </div>
  );
};

export default Stem;
