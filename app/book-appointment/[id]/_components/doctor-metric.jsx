import { memo } from "react";
import Badge from "./badge";

const DoctorMetric = memo(({ value, children }) => {
  return <Badge className="!bg-[#D9D9D9] rounded-3xl lg:!rounded-[30px]">
    <h1 className="font-bold text-lg lg:text-xl">{value}</h1>
    <h2 className='font-medium text-base text-[#9E9E9E] lg:text-lg'>{children}</h2>
  </Badge>
});

export default DoctorMetric;
