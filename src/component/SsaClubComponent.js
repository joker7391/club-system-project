import React from "react";

import { sportsClubImages } from "../assets/data";

const SsaClubComponent = () => {
  return (
    <div className="min-h-screen bg-[#e0e04b] flex justify-center items-center w-full lg:w-auto">
      <div className="py-20 flex flex-col items-center gap-10">
        <h1 className="text-[#1c1c1c] font-semibold text-md lg:text-3xl text-center w-auto lg:w-[30em]">
          Welcome to Student Sports Association, where passion meets performance
          and camaraderie thrives. As a beacon of athletic excellence and
          community spirit, our club stands as a testament to the power of
          sports in shaping individuals and fostering lifelong connections.
          Whether you're a seasoned athlete seeking to hone your skills, a
          newcomer eager to explore new horizons, or simply someone who shares
          our love for the game, you've found your home here. Join us as we
          embark on a journey of triumphs, teamwork, and endless memories.
          Welcome to the heart of our sporting family
        </h1>
        <button className="bg-[#1c1c1cda] text-lg font-semibold text-white p-3 w-[10em]">
          Join
        </button>
      </div>
    </div>
  );
};

export default SsaClubComponent;
