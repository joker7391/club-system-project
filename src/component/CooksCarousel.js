import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import cooks1 from "../assets/cooks1.png";
import cooks2 from "../assets/cooks2.png";
import cooks3 from "../assets/cooks3.png";
import cooks4 from "../assets/cooks4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "cooks1",
    imgPath: cooks1,
  },
  {
    label: "cooks2",
    imgPath: cooks2,
  },
  {
    label: "cooks3",
    imgPath: cooks3,
  },
  {
    label: "cooks4",
    imgPath: cooks4,
  },
];

const CooksCarousel = () => {
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

export default CooksCarousel;
