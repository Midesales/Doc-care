import React, { useMemo } from "react";
import Header from "../../components/defaults/Header";
import Footer from "../../components/defaults/Footer";
import Banner from "../../find-a-doctor/banner";
import { doctors } from "../../_constants/doctors";
import BackButton from "./_components/back-button";
import OtherDoctors from "./_components/other-doctors";
import SelectedDoctor from "./_components/selected-doctor";
import AppointmentForm from "./_components/appointment-form";

export default function BookAppointmentPage({ params }) {
  const doctor = useMemo(() => {
    return doctors.find(d => d.id === parseInt(params.id));
  }, [params.id]);

  return (
    <div>
      <Header/>
      <Banner/>
      <main>
        <div className="relative px-6 lg:px-24">
          <BackButton/>
          <SelectedDoctor doctor={doctor}/>
          <AppointmentForm doctor={doctor}/>
        </div>
        <OtherDoctors doctor={doctor}/>
      </main>
      <Footer/>
    </div>
  );
};
