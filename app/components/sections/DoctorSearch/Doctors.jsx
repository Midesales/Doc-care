import Image from "next/image";
import React from "react";
import DoctorTwo from "../../../images/doctor-02.png";
import DoctorThree from "../../../images/doctor-03.png";
import DoctorFour from "../../../images/doctor-04.png";
import DoctorFive from "../../../images/doctor-05.png";

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Wilbert", title: "Surgeon", image: DoctorTwo },
    { id: 2, name: "Dr. Henry", title: "Neurologist", image: DoctorThree },
    { id: 3, name: "Dr. Smith", title: "Dentist", image: DoctorFour },
    { id: 4, name: "Dr. Wilfred", title: "Gynacologist", image: DoctorFive },
    { id: 5, name: "Dr. William", title: "Surgeon", image: DoctorTwo },
    { id: 6, name: "Dr. John Doe", title: "Cardiologist", image: DoctorTwo },
  ];
  return (
    <div className="bg-[#cdf2f1] py-[15vh]">
      <h2 className="text-center text-[#000] text-[70px] font-bold">
        Our Doctors
      </h2>

      <div className="grid grid-cols-3 gap-10 mt-10 w-[80vw] mx-auto items-center">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col">
            <div className="bg-[#3aaba9] w-[450px] h-[300px] rounded-t-2xl">
                <Image src={doctor.image} alt="doctor" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="bg-[#fff] w-[450px] flex flex-col rounded-b-2xl items-center py-4">
                <h3 className="text-[#3aaba9] text-[36px] font-bold">{doctor.name}</h3>
                <p className="text-[#000] text-[24px] font-bold">{doctor.title}</p>
                <button className="border border-[#3aaba9] text-[#3aaba9] font-semibold px-4 py-1 mt-4 rounded-lg">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
