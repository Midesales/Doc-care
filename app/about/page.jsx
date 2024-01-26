import React from "react";
import Header from "../components/defaults/Header";
import Footer from "../components/defaults/Footer";
import unsplash from "../_images/unsplash.png";
import Image from "next/image";
import Link from "next/link";
import woman from "../_images/unsplash2.png";
import thermo from "../_images/vector3.png";
import doctorbag from "../_images/doctors-bag.png";
import vee from "../_images/vector2.png";
import user from "../_images/user-doctor.png";


function About() {
  return (
    <div>
      <Header />
      <div
        className="block  lg:flex justify-center  p-20 bg-[#19BCBA]
 text-white "
      >
        <Image src={unsplash} alt="man-two" className="w-[40rem]" />
        <div className="flex flex-col items-center lg:items-start p-10 gap-6  ">
          <h4 className="text-lg lg:text-6xl font-bold">
            Your Health, <br></br> Our Commitment
          </h4>
          <div>
            <p className=" text-[12px] md:text-sm lg:text-lg font-semibold">
              Welcome to a healthcare experience designed for you.
            </p>
            <p className=" text-[12px] md:text-sm lg:text-lg font-semibold">
              Our simplifies the path to wellness, connecting you seamlessly
              with expert care.
            </p>
          </div>
          <div className="flex gap-10 ">
            <div className="flex flex-col justify-center lg:items-center text-lg font-semibold ">
              <p className="text-xl lg:text-5xl">1300+</p>
              <p>Satisfied Patient</p>
            </div>
            <div className="flex flex-col justify-center lg:items-center text-lg font-semibold ">
              <p className="text:xl lg:text-5xl">50+</p>
              <p>Specialized Services</p>
            </div>
          </div>
          <div className="py-4 ">
            <Link
              href="/signin"
              className="hidden lg:flex border-[#3AABA9]
                rounded-xl text-white bg-[#3AABA9]
                px-4 py-3"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="p-20 bg-white">
        <h3
          className="text-[#19BCBA] font-bold text-5xl
"
        >
          Designation
        </h3>
        <div className="md:flex lg:flex justify-between items-center pt-8">
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center py-4 px-10 gap-3 border shadow-sm my-4
 rounded-xl bg-white"
            >
              <Image
                src={thermo}
                className="w-12 border rounded-full bg-[#19BCBA] p-2"
              />
              <p className="text-sm lg:text-2xl font-medium">Best Expertise Doctor</p>
            </div>
            <div
              className="flex items-center py-4 px-10 gap-3 border shadow-sm my-4
 rounded-xl bg-white"
            >
              <Image
                src={doctorbag}
                className="w-12 border rounded-full bg-[#19BCBA] p-2"
              />
              <p className="text-sm lg:text-2xl font-medium">24/7 Health Care</p>
            </div>
            <div
              className="flex items-center py-4 px-10 gap-3 border shadow-sm my-4
 rounded-xl bg-white"
            >
              <Image
                src={vee}
                className="w-12 border rounded-full bg-[#19BCBA] p-2"
              />
              <p className="text-sm lg:text-2xl font-medium">Emergency Services</p>
            </div>
            <div
              className="flex items-center py-4 px-10 gap-3 border shadow-sm my-4
 rounded-xl bg-white"
            >
              <Image
                src={user}
                className="w-12 border rounded-full bg-[#19BCBA] p-2"
              />
              <p className="text-sm lg:text-2xl font-medium">Easy & Quick Appointment</p>
            </div>
          </div>
          <div>
            <Image src={woman} alt="woman-doctor" className="w-[30rem]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
