import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import abm1 from "../assets/abm1.png";
import abm2 from "../assets/abm2.png";
import abm3 from "../assets/abm3.png";
import abm4 from "../assets/abm4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "abm1",
    imgPath: abm1,
  },
  {
    label: "abm2",
    imgPath: abm2,
  },
  {
    label: "abm3",
    imgPath: abm3,
  },
  {
    label: "abm4",
    imgPath: abm4,
  },
];

const AbmCarousel = () => {
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

export default AbmCarousel;
