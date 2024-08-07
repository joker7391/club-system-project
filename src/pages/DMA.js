import React, { useContext } from "react";
import { AuthContext } from "../index";
import DMAA from "../clubHEADERS/DMAA";

import DmaCarousel from "../component/DmaCarousel";
import DMAclubComponent from "../component/DMAclubComponent";

const DMA = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <DMAA />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="">
        <DmaCarousel />
      </div>
      <DMAclubComponent />
    </div>
  );
};

export default DMA;
