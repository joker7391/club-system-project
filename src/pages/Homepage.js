import React from "react";
import Header from "../component/Header";
import Strip from "../component/Strip";
import ClubPicker from "../component/ClubPicker";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Strip />
      <div className="h-screen bg-yellow-400 ">
        <ClubPicker />
      </div>
    </div>
  );
};

export default Homepage;
