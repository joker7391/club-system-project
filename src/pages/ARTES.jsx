import React, { useContext } from "react";
import { AuthContext } from "../index";
import AARTES from "../clubHEADERS/AARTES";
import ArtesCarousel from "../component/ArtesCarousel";
import ARTESclubComponent from "../component/ARTESclubComponent";

const ARTES = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="">
      <AARTES />
      <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
        Welcome {userData?.name || "User"}
      </h1>
      <div className="mb-20 mt-4">
        <ArtesCarousel />
      </div>
      <ARTESclubComponent />
    </div>
  );
};

export default ARTES;
