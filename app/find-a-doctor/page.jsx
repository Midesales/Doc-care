import React from "react";
import Header from "../components/defaults/Header";
import Image from "next/image";
import Woman from "@/app/_images/doctor-01.png";
import Doctors from "../components/sections/DoctorSearch/Doctors";
import Departments from "../components/sections/DoctorSearch/Departments";
import Footer from "../components/defaults/Footer";
import Banner from "@/app/find-a-doctor/banner";

const DoctorSearch = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Doctors />
      <Departments />
      <Footer />
    </div>
  );
};

export default DoctorSearch;
