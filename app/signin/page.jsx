"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Apple from "../images/apple.png";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import { useRouter } from "next/navigation";
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "../firebase/config";

export default function Signin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const [error, setError] = useState(false)

  const handleSignin = async () => {
    try {
      // Check if any of the required fields is empty
      if (!email || !password) {
        console.error("Please fill in all the details.");
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 2000);
        
        return;
      }
  
      const res = await SignInWithEmailAndPassword(email, password)
      console.log(res)
      router.push("/find-a-doctor");
      setEmail('');
      setPassword('')
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };
  

  return (
    <main className=" relative min-h-screen flex justify-center items-center ">
      <div className="flex  bg-white">
        <div className="flex flex-col border-[#FFFFFF] shadow-md ">
          <div className="w-20">
            <Image src={Logo} alt="logo"></Image>
          </div>

          <div className="px-14 w-96">
            <div>
              {error && <p className="text-red-400 text-center">
                Please fill in the details</p>}
            </div>
            <p className="text-[#3AABA9] font-semibold text-2xl flex items-center justify-center py-6">
              Sign In to Doc’care
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#B0A3A3] bg-[#D9D9D9] p-2 outline-none"
              ></input>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <button
                onClick={handleSignin}
                className="border bg-[#3AABA9] py-2 px-10 rounded-3xl"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#3AABA9] border border-[#3AABA9] text-white flex flex-col justify-center items-center gap-3 px-8 ">
          <p className="text-2xl font-semibold">Welcome back!</p>
          <div className="text-xs text-center">
            <p>Enter your login details to continue </p>
            <p> to book an appointment.</p>
          </div>

          <p className="text-xs py-3">Don’t have an account?</p>
          <button
            className="border rounded-xl px-3 py-1 "
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}
