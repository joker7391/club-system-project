import React from "react";
import Header from "../component/Header";
import ARTESclubComponent from "../component/ARTESclubComponent";

const ARTES = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-center h-screen bg-no-repeat bg-[#e68b8bda] w-full lg:w-auto">
        <h1 className="font-extrabold text-[20px] lg:text-[60px] text-[#f8f8f8] text-center tracking-wide">
          Welcome <span>to ARTES</span>
        </h1>
      </div>
      <ARTESclubComponent />
    </div>
  );
};

export default ARTES;
