"use client";

import Image from "next/image";
import Logo from "../images/logo.png";
import Apple from "../images/apple.png";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Ellipse from "../images/Ellipse 1.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className=" relative min-h-screen flex justify-center items-center ">
      {/* <div className="absolute">
      <Image src={Ellipse} className="top-0"></Image>
      </div> */}

      <div className="flex  -z-10 bg-white">
        <div className="bg-[#3AABA9] border border-[#3AABA9] text-white flex flex-col gap-3  ">
          <div className="w-20">
            <Image src={Logo} alt="logo"></Image>
          </div>
          <div className="flex flex-col justify-center items-center  pt-8 px-8">
            <p className="text-2xl font-semibold py-6">Hello, Friend!</p>
            <div className="text-xs text-center">
              <p>Create an account to book an </p>
              <p> appointment.</p>
            </div>
            <p className="text-xs py-4">Do you have an account?</p>
          <button
            className="border rounded-xl px-3 py-1 "
            onClick={() => router.push("/")}
          >
            Sign In
          </button>
          </div>

        
        </div>
        <div className="flex border-[#FFFFFF] shadow-md ">
          <div className="px-14 py-6 w-96">
            <p className="text-[#3AABA9] font-semibold text-2xl flex items-center justify-center py-6">
              Sign Up to Doc’care
            </p>
            <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Name"
                className="text-[#B0A3A3] bg-[#D9D9D9] p-2 outline-none"
              ></input>
              <input
                type="text"
                placeholder="Username"
                className="text-[#B0A3A3] bg-[#D9D9D9] p-2 outline-none"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className=" text-[#B0A3A3] bg-[#D9D9D9] p-2 outline-none"
              ></input>
            </div>
            <div className="flex justify-center p-3">
              <p className="align-middle text-[#D9D9D9]">or</p>
            </div>

            <div className="flex justify-center items-center gap-10">
              <Image src={Apple} alt="apple" className="w-6"></Image>
              <Image src={Google} alt="google" className="w-6"></Image>
              <Image src={Facebook} alt="facebook" className="w-6"></Image>
            </div>
            <div className="flex justify-center p-6 text-white">
              <button className="border bg-[#3AABA9] py-2 px-10 rounded-3xl">
               Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
