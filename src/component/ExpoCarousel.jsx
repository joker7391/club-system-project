import React, { useState, useEffect } from "react";
import expo1 from "../assets/expo1.jpg";
import expo2 from "../assets/expo2.jpg";
import expo3 from "../assets/expo3.jpg";
import expo4 from "../assets/expo4.jpg";

const ExpoCarousel = () => {
  const images = [expo1, expo2, expo3, expo4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full max-w-[800px] h-[450px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="h-full transition-transform duration-700 ease-in-out whitespace-nowrap"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="inline-block w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
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

export default ExpoCarousel;
