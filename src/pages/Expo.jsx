import React, { useContext } from 'react';
import { AuthContext } from "../index";
import EXPON from "../clubHEADERS/EXPON";
import ExpoCarousel from "../component/ExpoCarousel";
import ExpoComponent from "../component/ExpoComponent";
const Expo = () => {
    const { userData } = useContext(AuthContext);
  
    return (
      <div className="">
            <EXPON  />
        <h1 className="font-serif text-[20px] lg:text-[60px] text-[#000000] text-center tracking-wide">
          Welcome {userData?.name || "User"}
        </h1>
        <div className="mb-8 mt-2">
          <ExpoCarousel />
        </div>
        <ExpoComponent />
      </div>
    );
  };

export default Expo