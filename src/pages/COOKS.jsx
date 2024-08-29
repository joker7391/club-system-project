import React, { useContext } from "react";
import { AuthContext } from "../index";
import COOOKS from "../clubHEADERS/COOOKS";
import CooksCarousel from "../component/CooksCarousel";
import COOKSclubComponent from "../component/COOKSclubComponent";

const COOKS = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <COOOKS />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-10 mt-2">
        <CooksCarousel />
      </div>
      <COOKSclubComponent />
    </div>
  );
};

export default COOKS;
