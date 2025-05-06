import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";


const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex justify-between">
      <div className="flex items-center gap-3">

      <button onClick={() => navigate("/expo")} className="text-[30px] cursor-pointer">
      <GiPerspectiveDiceSixFacesRandom />

        </button>
        <a href="https://github.com/myk00">
          <button className="text-[30px] cursor-pointer">
            <FaGithub />
          </button>
        </a>
        <a href="https://facebook.com/okym.okym.75">
          <button className="text-[30px] cursor-pointer">
            <FaFacebook />
          </button>
        </a>


      </div>
    </div>
  );
};

export default Footer;
