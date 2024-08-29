import React, { useContext } from "react";
import { AuthContext } from "../index";
import IITMAWE from "../clubHEADERS/IITMAWE";
import ItmaweCarousel from "../component/ItmaweCarousel";
import ITMAWEclubComponent from "../component/ITMAWEclubComponent";

const ITMAWE = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <IITMAWE />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-10 mt-2">
        <ItmaweCarousel />
      </div>
      <ITMAWEclubComponent />
    </div>
  );
};

export default ITMAWE;
