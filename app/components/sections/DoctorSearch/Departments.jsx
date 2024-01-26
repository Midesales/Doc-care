import React from "react";
import Pregnancy from "@/app/_images/pregnancy.png";
import EyeCare from "@/app/_images/eyecare.png";
import CheckUp from "@/app/_images/checkup.png";
import Pediatrics from "@/app/_images/pediatrics.png";
import LabTest from "@/app/_images/labtest.png";
import Xray from "@/app/_images/xray.png";

const Departments = () => {
  const departments = [
    { id: 1, name: "Pregnancy", image: Pregnancy },
    { id: 2, name: "Eye Care", image: EyeCare },
    { id: 3, name: "Check Up", image: CheckUp },
    { id: 4, name: "Pediatrics", image: Pediatrics },
    { id: 5, name: "Lab Test", image: LabTest },
    { id: 6, name: "X-ray", image: Xray },
  ];
  return (
    <div className="bg-[#fff] py-[15vh]">
      <h2 className="text-center text-[#000] lg:text-[70px] text-[40px] font-bold">
        Departments
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-10 mt-10 items-center lg:w-[80vw] w-[90vw] mx-auto">
        {departments.map((department) => (
          <div
            key={department.id}
            style={{
              backgroundImage: `url(${department.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
            }}
            className="flex justify-center items-end rounded-[24px]"
          >
            <p className="bg-[#3aaba9] rounded-[20px] mb-4 px-6 text-[20px] py-1 font-semibold">{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
