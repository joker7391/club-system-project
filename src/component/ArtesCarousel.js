import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import artes1 from "../assets/artes1.png";
import artes2 from "../assets/artes2.png";
import artes3 from "../assets/artes3.png";
import artes4 from "../assets/artes4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "artes1",
    imgPath: artes1,
  },
  {
    label: "artes2",
    imgPath: artes2,
  },
  {
    label: "artes3",
    imgPath: artes3,
  },
  {
    label: "artes4",
    imgPath: artes4,
  },
];

const ArtesCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="relative">
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={setActiveStep}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 && (
                <img
                  src={step.imgPath}
                  alt={step.label}
                  className={`object-cover w-50 h-15 transition-opacity duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span key={index} onClick={() => setActiveStep(index)} />
        ))}
      </div>
    </div>
  );
};

export default ArtesCarousel;
