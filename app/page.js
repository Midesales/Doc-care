"use client";
import Image from "next/image";
import Man from "./images/boy.png";
import Vector from "./images/Vector.png";
import { useRouter } from "next/navigation";
import Header from "./components/defaults/Header";
import Footer from "./components/defaults/Footer";
import Link from "next/link";
import doctor1 from "./images/doctor1.png";
import doctor2 from "./images/doctor2.png";
import doctor3 from "./images/doctor3.png";
import arrow from "./images/arrow.png";
import unsplash from "./images/unsplash.png";

export default function Home() {
  const router = useRouter();
  return (
    <main className="  min-h-screen ">
      <Header />

      <div className="bg-[#3AABA9] flex justify-evenly items-center">
        <div className="text-white text-center pt-8 pb-28 flex flex-col p-4 ">
          <div className="text-3xl lg:hidden  font-bold">
            <p className="pb-2">Book Your Doctor Appointment Online</p>
          </div>
          <div className="hidden lg:flex flex-col gap-1 text-7xl  font-bold">
            <p className="pb-2">Book Your Doctor </p>
            <p className="pb-2">Appointment Online</p>
          </div>
          <p className="text-center">
            A Healthier Tomorrow Starts Today: Schedule Your Appointment!{" "}
          </p>
          <p className="text-center">
            Your Wellness, Our Expertise: Set Up Your Appointment Today.
          </p>
          <div className="hidden md:flex lg:flex gap-10 pt-6 items-center justify-center text-lg">
            <button
              onClick={() => router.push("/signin")}
              className="border rounded-xl bg-white text-black px-5 py-2"
            >
              Book An Appointment
            </button>

            <button
              className="border-2 rounded-xl bg-[#3AABA9] text-white px-5 py-2 flex items-center gap-2"
              onClick={() => (window.location.href = "tel:08154089060")} 
            >
              <Image src={Vector} className="w-4" alt="image" />
              Call Now
            </button>
          </div>
        </div>
        <div>
          <Image src={Man} alt="pop" className="w-[500px]"></Image>
        </div>
      </div>

      <div>
        <div className="hidden lg:flex justify-center items-center gap-4 -mt-10">
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

        <div>
          <div className="px-36 font-semibold">
            <h2 className="text-sm lg:text-3xl font-bold text-center pt-12">
              How It Works!
            </h2>
            <div className="block lg:flex justify-center items-center">
              <div className="flex flex-col items-center">
                <Image src={doctor1} alt="first_icon"></Image>
                <p className="text-center">
                  Discover skilled doctors base on specialization.
                </p>
              </div>

              <Image
                src={arrow}
                alt="first_arrow"
                className="w-36 hidden lg:flex"
              ></Image>

              <div className="flex flex-col items-center">
                <Image src={doctor2} alt="second_icon"></Image>
                <p className="text-center">
                  Effortlessly book appointment at your convenience.
                </p>
              </div>
              <Image
                src={arrow}
                alt="second_arrow"
                className="w-36 hidden lg:flex"
              ></Image>
              <div className="flex flex-col items-center">
                <Image src={doctor3} alt="third_icon"></Image>

                <p className="text-center text-wrap">
                  Receive personalized healthcare tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:flex justify-center p-14 ">
          <Image src={unsplash} alt="man-two" className="w-[40rem]" />
          <div className="flex flex-col items-center lg:items-start p-10 gap-6 ">
            <h3 className="text-[#3AABA9]  text-xl">About Us</h3>
            <h4 className="text-lg lg:text-6xl font-bold">
              Your Health, <br></br> Our Commitment
            </h4>
            <div>
              <p className="text-center text-[12px] md:text-sm lg:text-lg font-semibold">
                Welcome to a healthcare experience designed for you.
              </p>
              <p className="text-center text-[12px] md:text-sm lg:text-lg font-semibold">
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
            <div className="py-4">
              <Link
                href="/signin"
                className="hidden lg:flex border rounded-xl text-white bg-[#3AABA9] px-4 py-3"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
