import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6 flex justify-between">
      <div className="flex items-center gap-3">
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
