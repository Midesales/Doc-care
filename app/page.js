"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./images/logo.png";
import Man from "./images/boy.png";
import Vector from './images/Vector.png'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="  min-h-screen ">
      <header className="flex justify-around items-center pt-6 px-10 pb-2 bg-white">
        <Image src={Logo} className="w-20"></Image>
        <Link href="/">Home</Link>
        <Link href="/">Find a Doctor</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
        <Link
          href="/signin"
          className="border rounded-xl text-white bg-[#3AABA9] px-4 py-2"
        >
          Book An Appointment
        </Link>
      </header>
      <div className="bg-[#3AABA9] flex justify-evenly items-center">
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
            <button onClick={() => router.push('/signin')} className="border rounded-xl bg-white text-black px-5 py-2">Book An Appointment</button>
            
            <button className="border-2 rounded-xl bg-[#3AABA9] text-white px-5 py-2 flex items-center gap-2">
              <Image src={Vector} className="w-4"></Image>
              Call Now
              </button>
          </div>
        </div>
        <div>
          <Image src={Man} className="w-[500px]"></Image>
        </div>
      </div>
    </main>
  );
}
