"use client";
import Image from "next/image";
import Man from "./images/boy.png";
import Vector from "./images/Vector.png";
import { useRouter } from "next/navigation";
import Header from "./component/header";
import doctor1 from "./images/doctor1.png";
import doctor2 from "./images/doctor2.png";
import doctor3 from "./images/doctor3.png";
import arrow from "./images/arrow.png";
import unsplash from './images/unsplash.png'

export default function Home() {
  const router = useRouter();
  return (
    <main className="  min-h-screen ">
      <Header />
      <div className="bg-[#3AABA9] flex flex-col">
        <div className="flex justify-evenly items-center">
          <div className="text-white text-center pt-8 pb-28 flex flex-col ">
            <div className=" text-6xl font-bold">
              <p className="pb-2">Book Your Doctor</p>
              <p className="pb-2">Appointment</p>
              <p className="pb-10">Online</p>
            </div>
            <p className="">
              A Healthier Tomorrow Starts Today: Schedule Your Appointment!{" "}
            </p>
            <p>Your Wellness, Our Expertise: Set Up Your Appointment Today.</p>
            <div className="flex gap-10 pt-6 items-center justify-center text-lg">
              <button
                onClick={() => router.push("/signin")}
                className="border rounded-xl bg-white text-black px-5 py-2"
              >
                Book An Appointment
              </button>

              <button className="border-2 rounded-xl bg-[#3AABA9] text-white px-5 py-2 flex items-center gap-2">
                <Image src={Vector} alt="vector" className="w-4"></Image>
                Call Now
              </button>
            </div>
          </div>
          <div>
            <Image src={Man} alt="pop" className="w-[500px]"></Image>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-4 -mt-10">
          <div className="flex justify-center items-center bg-white border p-2 shadow-md">
            <div className="flex flex-col justify-center items-center px-6">
              <p className="font-bold text-3xl">1300+</p>
              <p className="font-semibold">Satisfied Patient</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6">
              <p className="font-bold text-3xl">20+</p>
              <p className="font-semibold">Specialized Services</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6">
              <p className="font-bold text-3xl">40+</p>
              <p className="font-semibold">Nursing Staffs</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6">
              <p className="font-bold text-3xl">24/7</p>
              <p className="font-semibold">Emergency Care</p>
            </div>
          </div>
        </div>
        <div className="px-36 font-semibold">
          <h2 className="text-3xl font-bold text-center pt-12">
            How It Works!
          </h2>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src={doctor1} alt="first_icon"></Image>
              <p className="text-center">
                Discover skilled doctors base on specialization.
              </p>
            </div>

            <Image src={arrow} alt="first_arrow" className="w-36"></Image>

            <div className="flex flex-col items-center">
              <Image src={doctor2} alt="second_icon"></Image>
              <p className="text-center">
                Effortlessly book appointment at your convenience.
              </p>
            </div>
            <Image src={arrow} alt="second_arrow" className="w-36"></Image>
            <div className="flex flex-col items-center">
              <Image src={doctor3} alt="third_icon"></Image>

              <p className="text-center text-wrap">
                Receive personalized healthcare tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex">
          <Image src={unsplash} alt="man-two" />
          <div>
            <h3>About Us</h3>
            <h4>Your Health, Our Commitment</h4>
            <p>
              Welcome to a healthcare experience designed for you. Our
              simplifies the path to wellness, connecting you seamlessly with
              expert care.
            </p>
          </div>
        </div>
    </main>
  );
}
