import { memo } from "react";
import Image from "next/image";
import Woman from "@/app/_images/doctor-01.png";

const Banner = memo(() => {
  return (
    <div className="bg-[#3aaba9] lg:px-16 px-4 flex lg:flex-row flex-col justify-between">
      <div className="pt-[15vh] lg:w-[50%]">
        <h2 className="lg:text-[70px] text-[40px] font-semibold capitalize text-white">
          Find available doctor for different ailment.
        </h2>
        <p className="text-[20px] pt-6">
          Lorem ipsum dolor sit amet consectetur. Neque pellentesque tincidunt
          diam bibendum amet sit nec lobortis. Ipsum dignissim.
        </p>
        <div className="input-field flex justify-between mt-6 lg:mb-0 mb-6 bg-[#fff] lg:w-[60%] rounded-lg px-4 py-2">
          <input
            type="text"
            className="text-[#333] w-[100%] bg-transparent outline-none border-none"
          />
          <button className="bg-[#3aaba9] py-1 px-6 rounded-lg">
            search
          </button>
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
  )
});

export default Banner;
