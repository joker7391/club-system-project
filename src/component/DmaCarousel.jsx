import React, { useState, useEffect } from "react";
import dma1 from "../assets/dma1.png";
import dma2 from "../assets/dma2.png";
import dma3 from "../assets/dma3.png";
import dma4 from "../assets/dma4.png";

const DmaCarousel = () => {
  const images = [dma1, dma2, dma3, dma4];
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
  });

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto inline-block"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-1 flex justify-center space-x-2">
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

export default DmaCarousel;
