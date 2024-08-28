import React from "react";
import "react-toastify/dist/ReactToastify.css";

const ABMclubComponent = () => {
  return (
    <div className="min-h-screen bg-[#6274c6] flex justify-center items-center w-full lg:w-auto">
      <div className="py-20 flex flex-col items-center gap-10">
        <h1 className="text-[#1c1c1c] font-semibold text-md lg:text-3xl text-center w-auto lg:w-[30em]">
          ABM Club usually engage in activities related in business, management,
          and entrepreneurship. Members of ABM Club also work on projects to
          apply their business skills and knowledge in real-life scenarios.
          Through their activities involvement in the club, students, have the
          opportunity to enhance their teamwork, leadership, problem-solving,
          and communication skills, all of which are essential in the field of
          business and management. The ABM Club serves as a platform for
          students to not only expand their knowledge and expertise in the
          business realm but also to apply what they have learned in meaningful
          and impactful ways.
        </h1>
        <button className="bg-[#1c1c1cda] text-lg font-semibold text-white p-3 w-[10em]">
          Join
        </button>
      </div>
    </div>
  );
};

export default ABMclubComponent;
