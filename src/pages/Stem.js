import React, { useContext } from "react";
import { AuthContext } from "../index";

import STEM from "../clubHEADERS/STEM";

import StemCarousel from "../component/StemCarousel";
import StemClubComponent from "../component/StemClubComponent";

const Stem = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-[#a8f8947f] ">
      <STEM />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide -pt-10">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="">
        <StemCarousel />
      </div>
      <StemClubComponent />
    </div>
  );
};

export default Stem;
