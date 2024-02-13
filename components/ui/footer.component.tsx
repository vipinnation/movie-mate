import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <div className="text-white my-4 w-3/5 mx-auto text-gray-400">
      <div className="flex items-center justify-around">
        <span>Home</span>
        <span>Terms of service</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
      </div>

      <div className="flex items-center justify-center pt-1">
        <FaFacebook className="mr-2 text-xl" />
        <FaX className="mr-2 text-xl" />
        <FaYoutube className="mr-2 text-2xl" />
        <FaInstagram className="mr-2 text-xl" />
      </div>
    </div>
  );
};

export default FooterComponent;
