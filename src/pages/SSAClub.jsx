import React, { useContext } from "react";
import { AuthContext } from "../index";
import SSA from "../clubHEADERS/SSA";
import SsaCarousel from "../component/SsaCarousel";

import SsaClubComponent from "../component/SsaClubComponent";

const SSAClub = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-gray-900">
      <SSA />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#fbff00dd] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-10 mt-2">
        <SsaCarousel />
      </div>
      <SsaClubComponent />
    </div>
  );
};

export default SSAClub;
