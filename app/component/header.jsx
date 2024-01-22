import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png";

function Header() {
  return (
    <div>
      <header className="flex justify-around items-center pt-6 px-10 pb-2 bg-white">
        <Image src={Logo} alt="logo" className="w-20"></Image>
        <Link href="/" className="">
          Home
        </Link>
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
    </div>
  );
}

export default Header;
