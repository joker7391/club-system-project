import React from "react";
import Header from "../component/Header";
import Strip from "../component/Strip";
import bgImage from "../assets/dashboardBG.jpg";
import ClubPicker from "../component/ClubPicker";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Strip />
      <div
        className="flex-grow flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ClubPicker />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
