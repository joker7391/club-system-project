import React, { useEffect, useState } from "react";

const ExpoComponent = () => {
  return (
    <div className="min-h-[100vh] bg-blue-600 flex justify-center items-center w-full lg:w-auto">
      <div className="py-20 flex flex-col items-center gap-10">
        <h1 className="text-[#ffffff] font-serif text-md lg:text-3xl text-center w-auto lg:w-[30em]">
        The Expo Event is a vibrant celebration of innovation, talent, and collaboration, bringing together students, 
        educators, and organizations to showcase their most impactful projects and ideas. Designed to inspire curiosity and spark meaningful 
        connections, the event serves as a platform for sharing breakthroughs in technology, arts, business, and community initiatives. 
        Through interactive exhibits, engaging presentations, and networking opportunities, 
        the Expo empowers participants to learn from one another, foster creativity, 
        and explore future possibilities across diverse fields.
        </h1>
      </div>
    </div>
  );
};

export default ExpoComponent