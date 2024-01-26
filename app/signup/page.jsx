"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../_images/logo.png";
import Apple from "../_images/apple.png";
import Google from "../_images/google.png";
import Facebook from "../_images/facebook.png";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../_firebase/config";

export default function Signup() {
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignup = async () => {
    try {
      // Check if any of the required fields is empty
      if (!email || !name || !password) {
        console.error("Please fill in all the details.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);

        return;
      }

      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);
      router.push("/find-a-doctor");
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <main className=" min-h-screen flex justify-center items-center ">
      <div className="flex bg-white">
        <div className="bg-[#3AABA9] border border-[#3AABA9] text-white flex flex-col gap-3  ">
          <div className="w-20">
            <Image src={Logo} alt="logo"></Image>
          </div>
          <div className="flex flex-col justify-center items-center  pt-8 px-8">
            <p className="text-2xl font-semibold py-6">Hello, Friend!</p>
            <div className="text-xs text-center">
              <p>Create an account to book an appointment.</p>
            </div>
            <p className="text-xs py-4">Do you have an account?</p>
            <button
              className="border rounded-xl px-3 py-1 "
              onClick={() => router.push("/signin")}
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
              <div>
                {error && (
                  <p className="text-red-400">Please fill in the details</p>
                )}
              </div>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" bg-[#D9D9D9] p-2 outline-none"
              ></input>
              <input
                type="text"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-[#D9D9D9] p-2 outline-none"
              ></input>

              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-[#D9D9D9] p-2 outline-none"
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
                onClick={handleSignup}
                className="border bg-[#3AABA9] py-2 px-10 rounded-3xl"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
