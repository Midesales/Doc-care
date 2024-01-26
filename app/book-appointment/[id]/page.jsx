import React, { useMemo } from "react";
import Header from "../../components/defaults/Header";
import Footer from "../../components/defaults/Footer";
import Banner from "@/app/find-a-doctor/banner";
import { doctors } from "@/app/_constants/doctors";
import SelectedDoctor from "@/app/book-appointment/[id]/_components/selected-doctor";
import AppointmentForm from "@/app/book-appointment/[id]/_components/appointment-form";

export default function BookAppointmentPage({ params }) {
  const doctor = useMemo(() => {
    return doctors.find(d => d.id === parseInt(params.id));
  }, [params.id]);

  return (
    <div>
      <Header/>
      <Banner/>
      <main className="px-6 lg:px-24">
        <SelectedDoctor doctor={doctor}/>
        <AppointmentForm doctor={doctor}/>
      </main>
      <Footer/>
    </div>
  );
};
