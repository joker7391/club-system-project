import React, { useContext } from "react";
import { AuthContext } from "../index";
import STEM from "../clubHEADERS/STEM";
import StemCarousel from "../component/StemCarousel";
import StemClubComponent from "../component/StemClubComponent";

const Stem = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-[#93fa797f] ">
      <STEM />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#0000cd] text-center tracking-wide -pt-10">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-10 mt-2">
        <StemCarousel />
      </div>
      <StemClubComponent />
    </div>
  );
};

export default Stem;
