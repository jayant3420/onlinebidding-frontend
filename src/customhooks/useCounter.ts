import { useEffect, useState } from "react";

const calculateTimeDifference = (start: Date, end: Date) => {
  const totalSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);

  if(totalSeconds <= 0) {
    return {
        days: 0,
        hours: 0,
        minutes: 0, 
        seconds: 0
    }
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export const useCounter = (item: any) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const start = new Date();
    const end = new Date(item.bidEndTime);
    return calculateTimeDifference(start, end);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prevTime;
        }

        let newDays = days;
        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return {
    timeLeft
  };
};
