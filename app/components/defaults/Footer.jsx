import React from "react";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  Phone,
  Youtube,
} from "../svgs/Icons";

const Footer = () => {
  return (
    <div className="bg-[#3aaba9]">
      <div className="w-[80vw] mx-auto py-[10vh] grid grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-[24px] mb-3 font-semibold">Contact</h2>
          <div className="flex space-x-2 text-[14px]">
            <Location />
            <p>123, Anywhere Street, One State.</p>
          </div>
          <div className="flex space-x-2 text-[14px]">
            <Phone />
            <p>+123456789</p>
          </div>
          <div className="flex space-x-2 text-[14px]">
            <Email />
            <p>anyone@gmail.com</p>
          </div>
        </div>
        <div className="space-y-2 font-semibold text-[18px]">
          <p>Home</p>
          <p>Services</p>
          <p>Find a Doctor</p>
          <p>About Us</p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-[20px]">Folow Us on</p>
          <div className="flex items-center space-x-3">
            <Facebook />
            <LinkedIn />
            <Youtube />
            <Instagram />
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto pb-20 text-[14px] text-[#fff] border-t border-[#fff] flex justify-between items-center"></div>
    </div>
  );
};

export default Footer;
