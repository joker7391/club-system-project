import React, { useContext } from "react";
import { AuthContext } from "../index";
import YRC from "../clubHEADERS/YRC";

import YrcClubComponent from "../component/YrcClubComponent";

const YrcClub = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <YRC />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>

      <YrcClubComponent />
    </div>
  );
};

export default YrcClub;