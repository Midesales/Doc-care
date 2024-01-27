import { memo } from "react";
import Image from "next/image";
import Woman from "../_images/doctor-01.png";

const Banner = memo(() => {
  return (
    <div className="bg-[#3aaba9] lg:px-16 px-4 flex lg:flex-row flex-col justify-between">
      <div className="pt-[15vh] lg:w-[50%]">
        <h2 className="lg:text-[65px] text-[40px] font-semibold capitalize text-white">
          Find available doctor <br></br> for different ailment
        </h2>
        <p className="text-[20px] pt-6 text-white text-lg">
          Discover experienced and caring doctors ready to help you with your
          health concerns. Whether you need a specialist or a general
          practitioner, we've got you covered. Our network of healthcare
          professionals is dedicated to providing the best possible care for a
          wide range of medical conditions.
        </p>
        <div className="input-field flex justify-between mt-6 lg:mb-0 mb-6 bg-[#fff] lg:w-[60%] rounded-xl px-4 py-3">
          <input
            type="text"
            className="text-[#333] w-[100%] bg-transparent outline-none border-none "
          />
          <button className="bg-[#3aaba9] py-1 px-6 rounded-lg">search</button>
        </div>
      </div>
      <div className="lg:w-[45%]">
        <Image
          src={Woman}
          alt="doctor-img-01"
          className="h-[800px] w-[100%] lg:flex hidden"
        />
      </div>
    </div>
  );
});

Banner.displayName = 'Banner';

export default Banner;
