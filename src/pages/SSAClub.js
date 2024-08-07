import React, { useContext } from "react";
import { AuthContext } from "../index";
import SSA from "../clubHEADERS/SSA";

import SsaClubComponent from "../component/SsaClubComponent";
import SsaCarousel from "../component/SsaCarousel";

const SSAClub = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <SSA />
      <div className="bg-gray-700">
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#fbd953] text-center tracking-wide">
          Welcome {userData?.name || "User"}
        </h1>
        <div className="">
          <SsaCarousel />
        </div>
      </div>
      <SsaClubComponent />
    </div>
  );
};

export default SSAClub;
