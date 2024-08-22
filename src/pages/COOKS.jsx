import React, { useContext } from "react";
import { AuthContext } from "../index";
import COOOKS from "../clubHEADERS/COOOKS";

import COOKSclubComponent from "../component/COOKSclubComponent";

const COOKS = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <COOOKS />
      <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className=""></div>
      <COOKSclubComponent />
    </div>
  );
};

export default COOKS;
