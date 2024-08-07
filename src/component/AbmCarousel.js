import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import classNames from "classnames";

import abm1 from "../assets/abm1.png";
import abm2 from "../assets/abm2.png";
import abm3 from "../assets/abm3.png";
import abm4 from "../assets/abm4.png";

const containerClasses = "relative mx-auto max-w-xl";
const imageContainerClasses = "relative";
const imageClasses = "object-cover w-50 h-full";
const buttonClasses =
  "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2";

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={containerClasses}>
      <div className={imageContainerClasses}>
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
                  className={classNames(imageClasses, {
                    "opacity-100": activeStep === index,
                    "opacity-0": activeStep !== index,
                  })}
                />
              )}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <button
          onClick={handleBack}
          className={classNames(buttonClasses, "left-4")}
          disabled={activeStep === 0}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className={classNames(buttonClasses, "right-4")}
          disabled={activeStep === images.length - 1}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveStep(index)}
            className={classNames(
              "w-3 h-3 bg-gray-500 rounded-full cursor-pointer",
              {
                "bg-gray-900": activeStep === index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default AbmCarousel;
