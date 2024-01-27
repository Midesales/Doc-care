'use client';

import React, { memo, useState } from 'react';
import ActionBadge from "./action-badge";
import useUpcomingDates from "../_hooks/use-upcoming-dates";
import Button from "../../../components/defaults/Button";
import SuccessAlert from "./SucessAlert";

const intervals = [
  '12:00 - 12:30 pm',
  '12:30 - 01:00 pm',
  '01:00 - 01:30 pm',
  '01:30 - 02:00 pm',
  '02:00 - 02:30 pm',
  '02:30 - 03:00 pm',
  '03:00 - 03:30 pm',
  '03:30 - 04:00 pm',
  '04:00 - 04:30 pm',
  '04:30 - 05:00 pm',
  '05:00 - 05:30 pm',
  '05:30 - 06:00 pm',
];

const AppointmentForm = memo(({ doctor }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const next10Dates = useUpcomingDates();
  const [selectedDate, setSelectedDate] = useState(next10Dates[0]);
  const [selectedInterval, setSelectedInterval] = useState(intervals[0]);

  const submit = () => {
    setIsSuccess(true);
  }

  if (isSuccess) {
    return <SuccessAlert/>;
  }

  return <form className="space-y-12">
    <h1 className="font-bold text-2xl">Choose a date & time to visit</h1>
    <div className="flex flex-col px-4 pb-24 items-center gap-12 lg:pl-24 lg:pr-0">
      <div className="flex flex-wrap justify-center gap-4 mx-auto">
        {next10Dates?.map((date, index) => (
          <ActionBadge key={index}
                       isSelected={selectedDate === date}
                       onClick={() => setSelectedDate(date)}>
            <h1 className="font-bold text-xl">{date.getDate()}</h1>
            <h2 className='font-medium text-lg text-[#9E9E9E]'>
              {date.toLocaleString('default', { month: 'short' })}
            </h2>
          </ActionBadge>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {intervals.map((interval, index) => (
          <ActionBadge key={index}
                       className="font-bold text-xl"
                       isSelected={interval === selectedInterval}
                       onClick={() => setSelectedInterval(interval)}>
            {interval}
          </ActionBadge>
        ))}
      </div>
      <Button onClick={submit}>
        Book appointment with <span className="text-white">{doctor.name}</span>
      </Button>
    </div>
  </form>
});


AppointmentForm.displayName = 'AppointmentForm';

export default AppointmentForm;
