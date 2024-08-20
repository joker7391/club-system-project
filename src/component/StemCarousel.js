import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import stem1 from "../assets/stem1.png";
import stem2 from "../assets/stem2.png";
import stem3 from "../assets/stem3.png";
import stem4 from "../assets/stem4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "stem1",
    imgPath: stem1,
  },
  {
    label: "stem2",
    imgPath: stem2,
  },
  {
    label: "stem3",
    imgPath: stem3,
  },
  {
    label: "stem4",
    imgPath: stem4,
  },
];

const StemCarousel = () => {
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

export default StemCarousel;
