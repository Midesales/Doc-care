"use client";
import Image from "next/image";
import Man from "./images/boy.png";
import Vector from './images/Vector.png'
import { useRouter } from "next/navigation";
import Header from "./components/defaults/Header";

export default function Home() {
  const router = useRouter()
  return (
    <main className="  min-h-screen ">
      <Header />
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
              <Image src={Vector} className="w-4" alt="image" />
              Call Now
              </button>
          </div>
        </div>
        <div>
          <Image src={Man} className="w-[500px]" alt="image" />
        </div>
      </div>
    </main>
  );
}
