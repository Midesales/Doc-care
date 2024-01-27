import { memo } from 'react';

const SuccessAlert = memo(() => {
  return (
    <section className="flex flex-col gap-8 pt-32 pb-10 px-4 text-3xl lg:px-32">
      <p>Your appointment is successfully booked with the appointment
        number S4RT5H1.</p>
      <p>Thank You.</p>
      <p className="font-bold pt-8">NB: <em>Missed Appointment will not be rescheduled manually.</em></p>
    </section>
  );
});

export default SuccessAlert;
