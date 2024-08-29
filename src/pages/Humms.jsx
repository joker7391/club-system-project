import React, { useContext } from "react";
import { AuthContext } from "../index";
import HUMMS from "../clubHEADERS/HUMMS";
import HummsCarousel from "../component/HummsCarousel";
import HummsClubComponent from "../component/HummsClubComponent";

const Humms = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <HUMMS />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-8 mt-2">
        <HummsCarousel />
      </div>
      <HummsClubComponent />
    </div>
  );
};

export default Humms;
