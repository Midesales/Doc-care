'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from "../../_images/logo.png";
import { usePathname } from 'next/navigation';

const Header = () => {

  const currentRoute = usePathname();
  const linkStyle = 'text-black hover:text-[#3aaba9] font-bold dark:text-white';
  const activeStyle = 'text-[#6BC0BF]  hover:text-[#19BCBA]  font-bold'

  return (
    <header className="flex justify-between items-center text-[#000] lg:pt-6 pt-3 lg:px-16 px-4 pb-2 bg-white ">
      <Image src={Logo} className="w-[4rem]" alt="img" />
      <div className="space-x-16 lg:flex hidden">
        <Link href="/"  className={currentRoute === '/' ? activeStyle : linkStyle}>Home</Link>
        <Link href="/find-a-doctor" className={currentRoute === '/find-a-doctor' ? activeStyle : linkStyle}>Find a Doctor</Link>
        <Link href="/about" className={currentRoute === '/about' ? activeStyle : linkStyle}>About Us</Link>
        <Link href="/contact" className={currentRoute === '/contact' ? activeStyle : linkStyle}>Contact Us</Link>
      </div>
      <Link
        href="/signin"
        className="border rounded-xl text-white bg-[#3AABA9] px-4 py-2"
      >
        Sign in
      </Link>
    </header>
  );
};

export default Header;
