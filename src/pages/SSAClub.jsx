import React, { useContext } from "react";
import { AuthContext } from "../index";
import SSA from "../clubHEADERS/SSA";
import SsaCarousel from "../component/SsaCarousel";

import SsaClubComponent from "../component/SsaClubComponent";

const SSAClub = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <SSA />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div>
        <SsaCarousel />
      </div>
      <SsaClubComponent />
    </div>
  );
};

export default SSAClub;
