import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import classNames from "classnames";

import yrc1 from "../assets/yrc1.jpg";
import yrc2 from "../assets/yrc2.jpg";
import yrc3 from "../assets/yrc3.png";
import yrc4 from "../assets/yrc4.png";

const containerClasses = "relative mx-auto max-w-xl";
const imageContainerClasses = "relative";
const imageClasses = "object-cover w-50 h-full";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "yrc1",
    imgPath: yrc1,
  },
  {
    label: "yrc2",
    imgPath: yrc2,
  },
  {
    label: "yrc3",
    imgPath: yrc3,
  },
  {
    label: "yrc4",
    imgPath: yrc4,
  },
];

const YrcCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);

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
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span key={index} onClick={() => setActiveStep(index)} />
        ))}
      </div>
    </div>
  );
};

export default YrcCarousel;
