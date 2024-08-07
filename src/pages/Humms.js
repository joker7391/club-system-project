import React, { useContext } from "react";
import { AuthContext } from "../index";
import HUMMS from "../clubHEADERS/HUMMS";

import HummsClubLogo from "../assets/HummsClub.png";
import HummsCarousel from "../component/HummsCarousel";
import HummsClubComponent from "../component/HummsClubComponent";

const Humms = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <HUMMS />
      <div>
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
          Welcome {userData?.name || "User"}
        </h1>
        <div className="">
          <HummsCarousel />
        </div>
      </div>
      <HummsClubComponent />
    </div>
  );
};

export default Humms;
