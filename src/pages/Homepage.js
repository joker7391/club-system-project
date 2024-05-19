import React from "react";
import Header from "../component/Header";
import Strip from "../component/Strip";
import ClubPicker from "../component/ClubPicker";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Strip />
      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-full flex justify-center">
        <ClubPicker />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
