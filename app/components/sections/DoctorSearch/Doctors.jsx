import React from "react";
import { doctors } from "../../../_constants/doctors";
import Doctor from "./Doctor";

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
          <Doctor key={doctor.id} doctor={doctor}/>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
