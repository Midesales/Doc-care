import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-[#000] pt-6 px-16 bg-white">
      <Image src={Logo} className="w-20" alt="img" />
      <div className="space-x-16">
        <Link href="/" className="hover:text-[#3aaba9] hover:font-bold">Home</Link>
        <Link href="/" className="hover:text-[#3aaba9] hover:font-bold">Find a Doctor</Link>
        <Link href="/" className="hover:text-[#3aaba9] hover:font-bold">About Us</Link>
        <Link href="/" className="hover:text-[#3aaba9] hover:font-bold">Contact Us</Link>
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
