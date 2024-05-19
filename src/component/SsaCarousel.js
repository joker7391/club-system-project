import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";
import img10 from "../assets/image10.jpg";
import img11 from "../assets/image11.jpg";

const SsaCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="min-h-screen bg-[#1c1c1cda] p-4">
      <div className="h-[40em]  w-full flex justify-center items-center">
        <Carousel
          autoPlaySpeed={2000}
          showDots={true}
          infinite={true}
          responsive={responsive}
          autoPlay={true}
          partialVisible={false}
        >
          <div>
            <img src={img8} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img9} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img10} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img11} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img11} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img11} alt="" className=" w-72 h-64" />
          </div>
          <div>
            <img src={img11} alt="" className=" w-72 h-64" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SsaCarousel;
