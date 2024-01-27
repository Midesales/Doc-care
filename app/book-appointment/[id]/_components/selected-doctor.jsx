import { memo } from "react";
import StarRating from "../../../components/defaults/StarRating";
import DoctorMetric from "./doctor-metric";
import Image from "next/image";

const SelectedDoctor = memo(({doctor}) => {
  return (
    <section className="flex flex-col justify-between items-end my-20 bg-white rounded-lg shadow lg:rounded-[30px] lg:flex-row">
      <div className="flex flex-col self-center gap-2 px-6 py-12 lg:gap-4 lg:pl-36 lg:pr-0 lg:py-24">
        <h1 className="text-2xl font-bold lg:text-[50px]">{doctor.name}</h1>
        <h2 className="text-lg font-medium text-[#9E9E9E] lg:text-[21px]">{doctor.title}</h2>
        <StarRating score={doctor.rating}/>
        <div className="flex gap-4 lg:gap-8">
          <DoctorMetric value={doctor.patientCount}>Patients</DoctorMetric>
          <DoctorMetric value={doctor.experience+'+'}>Experience</DoctorMetric>
        </div>
      </div>
      <Image src={doctor.image} alt={`${doctor.name}'s display picture`} width={408} height={612}/>
    </section>
  )
});

export default SelectedDoctor;
