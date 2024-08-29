import React, { useContext } from "react";
import { AuthContext } from "../index";
import AABM from "../clubHEADERS/AABM";
import AbmCarousel from "../component/AbmCarousel";

import ABMclubComponent from "../component/ABMclubComponent";

const ABM = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <AABM />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-8 mt-2">
        <AbmCarousel />
      </div>
      <ABMclubComponent />
    </div>
  );
};

export default ABM;
