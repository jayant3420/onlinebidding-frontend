export const useBid = () => {
  const calculateTimeDifference = (start: Date, end: Date) => {
    const totalSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  return {
    calculateTimeDifference,
  };
};
