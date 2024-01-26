import { useMemo } from "react";

export default function useUpcomingDates() {
  return useMemo(() => {
    const today = new Date();

    const dayPlusN = n => {
      const date = new Date(today);
      date.setDate(today.getDate() + n + 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    return Array(10).fill('').map(
      (_, index) => dayPlusN(index)
    );
  }, []);
}
