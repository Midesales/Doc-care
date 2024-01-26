import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo.png";


const Header = () => {
  return (
    <header className="flex justify-between items-center text-[#000] lg:pt-6 pt-3 lg:px-16 px-4 pb-2 bg-white ">
      <Image src={Logo} className="w-[4rem]" alt="img" />
      <div className="space-x-16 lg:flex hidden">
        <Link href="/" className="hover:text-[#3aaba9] hover:font-bold dark:text-white">Home</Link>
        <Link href="/find-a-doctor" className="hover:text-[#3aaba9] hover:font-bold dark:text-white">Find a Doctor</Link>
        <Link href="/about" className="hover:text-[#3aaba9] hover:font-bold dark:text-white">About Us</Link>
        <Link href="/contact" className="hover:text-[#3aaba9] hover:font-bold dark:text-white">Contact Us</Link>
      </div>
      <Link
        href="/signin"
        className="border rounded-xl text-white bg-[#3AABA9] px-4 py-2"
      >
        Book An Appointment
      </Link>
    </header>
  );
};

export default Header;
