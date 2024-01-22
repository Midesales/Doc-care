import React from "react";
import Pregnancy from "../../../images/pregnancy.png";
import EyeCare from "../../../images/eyecare.png";
import CheckUp from "../../../images/checkup.png";
import Pediatrics from "../../../images/pediatrics.png";
import LabTest from "../../../images/labtest.png";
import Xray from "../../../images/xray.png";

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
      <h2 className="text-center text-[#000] text-[70px] font-bold">
        Departments
      </h2>

      <div className="grid grid-cols-3 gap-10 mt-10 items-center w-[80vw] mx-auto">
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
