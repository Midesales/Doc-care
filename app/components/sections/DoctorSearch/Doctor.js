import React, { memo } from "react";
import Image from "next/image";

const Doctor = memo(({ doctor }) => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#3aaba9] lg:w-[450px] w-[90vw] mx-auto h-[300px] rounded-t-2xl">
        <Image src={doctor.image} alt="doctor"
               className="w-[100%] h-[100%] object-cover"/>
      </div>
      <div
        className="bg-[#fff] lg:w-[450px] w-[90vw] flex flex-col rounded-b-2xl items-center py-4">
        <h3 className="text-[#3aaba9] text-[36px] font-bold">{doctor.name}</h3>
        <p className="text-[#000] text-[24px] font-bold">{doctor.title}</p>
        <a href={`/book-appointment/${doctor.id}`}
          className="border border-[#3aaba9] text-[#3aaba9] font-semibold px-4 py-1 mt-4 rounded-lg">
          Book appointment
        </a>
      </div>
    </div>
  );
})

export default Doctor;
