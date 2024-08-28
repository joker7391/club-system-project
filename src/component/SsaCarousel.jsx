import React, { useState } from "react";
import ssa1 from "../assets/ssa1.jpg";
import ssa2 from "../assets/ssa2.jpg";
import ssa3 from "../assets/ssa3.jpg";
import ssa4 from "../assets/ssa4.jpg";

const SsaCarousel = () => {
  const images = [ssa1, ssa2, ssa3, ssa4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 focus:outline-none"
      >
        &#8249;
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 focus:outline-none"
      >
        &#8250;
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SsaCarousel;
