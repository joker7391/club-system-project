import React, { useContext } from "react";
import { AuthContext } from "../index";
import TOUSLEE from "../clubHEADERS/TOUSLEE";

import TOUSLEclubComponent from "../component/TOUSLEclubComponent";

const TOUSLE = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <TOUSLEE />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>

      <TOUSLEclubComponent />
    </div>
  );
};

export default TOUSLE;
