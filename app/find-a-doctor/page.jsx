import React from "react";
import Header from "../components/defaults/Header";
import Doctors from "../components/sections/DoctorSearch/Doctors";
import Departments from "../components/sections/DoctorSearch/Departments";
import Footer from "../components/defaults/Footer";
import Banner from "../find-a-doctor/banner";

const DoctorSearch = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Doctors />
      <Departments />
      <Footer />
    </div>
  );
};

export default DoctorSearch;
