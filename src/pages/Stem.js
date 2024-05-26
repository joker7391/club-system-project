import React from "react";
import Header from "../component/Header";
import stemClubLogo from "../assets/image3.jpg";
import StemClubComponent from "../component/StemClubComponent";

const Stem = () => {
  return (
    <div className="">
      <Header />
      <div
        className="bg-center h-screen bg-no-repeat bg-[#498727da] w-full lg:w-auto"
        style={{ backgroundImage: `url(${stemClubLogo})` }}
      >
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#e0e04b] text-center tracking-wide">
          Welcome <span>STEM</span>
        </h1>
      </div>
      <StemClubComponent />
    </div>
  );
};

export default Stem;
