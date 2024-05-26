import React from "react";

const StemClubComponent = () => {
  return (
    <div className="min-h-screen bg-[#6df276] flex justify-center items-center w-full lg:w-auto">
      <div className="py-20 flex flex-col items-center gap-10">
        <h1 className="text-[#1c1c1c] font-semibold text-md lg:text-3xl text-center w-auto lg:w-[30em]">
          STEM club is about learning or getting to a glimpse at Science,
          Technology, Engineering, and Math track for those with different
          tracks. It's also being managed by the Club Representative, Secretary,
          and Manager along with their core members, the STEM club hosts famous
          club events like "Tagisan ng Talino sa Agham at Sipnayan" and the
          STEM-Tech Exhibit.
        </h1>
        <button className="bg-[#1c1c1cda] text-lg font-semibold text-white p-3 w-[10em]">
          Join
        </button>
      </div>
    </div>
  );
};

export default StemClubComponent;
