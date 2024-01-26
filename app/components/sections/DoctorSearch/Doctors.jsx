import Image from "next/image";
import React from "react";
import { doctors } from "@/app/_constants/doctors";

const Doctors = () => {
  return (
    <div className="bg-[#cdf2f1] py-[15vh]">
      <h2
        className="text-center text-[#000] lg:text-[70px] text-[40px] font-bold">
        Our Doctors
      </h2>

      <div
        className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10 mt-10 lg:w-[80vw] w-[90vw] mx-auto items-center">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col">
            <div
              className="bg-[#3aaba9] lg:w-[450px] w-[90vw] mx-auto h-[300px] rounded-t-2xl">
              <Image src={doctor.image} alt="doctor"
                     className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div
              className="bg-[#fff] lg:w-[450px] w-[90vw] flex flex-col rounded-b-2xl items-center py-4">
              <h3
                className="text-[#3aaba9] text-[36px] font-bold">{doctor.name}</h3>
              <p
                className="text-[#000] text-[24px] font-bold">{doctor.title}</p>
              <button
                className="border border-[#3aaba9] text-[#3aaba9] font-semibold px-4 py-1 mt-4 rounded-lg">View
                Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
