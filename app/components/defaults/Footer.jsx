import React from "react";
import { Email, Instagram, LinkedIn, Location, Phone } from "../svgs/Icons";
import twitter from "../../_images/twitter.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#3aaba9] text-white ">
      <div className="lg:w-[80vw] w-[90vw] mx-auto py-[10vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-6">
        <div className="space-y-2">
          <h2 className="text-[24px] mb-3 font-semibold">Contact</h2>
          <div className="flex items-center space-x-2 text-[14px]">
            <Location />
            <p>Ile-Ife, Osun State.</p>
          </div>
          <div className="flex items-center space-x-2 text-[14px]">
            <Phone />
            <p>08154089060</p>
          </div>
          <div className="flex items-center space-x-2 text-[14px]">
            <Email />
            <p>vayomide2@gmail.com</p>
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
          <div className="flex items-center gap-3 space-x-3">
            <Link href="https://twitter.com/ayoade_mide">
              <Image src={twitter} alt="twitter" className="w-14"></Image>
            </Link>

            <Link href="https://www.linkedin.com/in/adeagbo-ayomide/">
              <LinkedIn />
            </Link>
            <Link href="https://www.instagram.com/ayoade_mide/">
              {" "}
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto pb-20 text-[14px] text-[#fff] border-t border-[#fff] flex justify-between items-center"></div>
    </div>
  );
};

export default Footer;
