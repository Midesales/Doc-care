import React from 'react'
import Header from '../components/defaults/Header'
import Footer from '../components/defaults/Footer'
import unsplash from "../images/unsplash.png";
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <div>
      <Header />
      <div className="block lg:flex justify-center p-14 bg-[#19BCBA]
 text-white ">
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
      <Footer />

    </div>
  )
}

export default About