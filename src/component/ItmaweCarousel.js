import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import itmawe1 from "../assets/itmawe1.png";
import itmawe2 from "../assets/itmawe2.png";
import itmawe3 from "../assets/itmawe3.png";
import itmawe4 from "../assets/itmawe4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "itmawe1",
    imgPath: itmawe1,
  },
  {
    label: "itmawe2",
    imgPath: itmawe2,
  },
  {
    label: "itmawe3",
    imgPath: itmawe3,
  },
  {
    label: "itmawe4",
    imgPath: itmawe4,
  },
];

const ItmaweCarousel = () => {
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

export default ItmaweCarousel;
