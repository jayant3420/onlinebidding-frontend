import { useState, useEffect } from "react";
import { useCounter } from "../../customhooks/useCounter";
import { useNavigate } from "react-router-dom";

type BidCareType = {
  item: any;
  isBidNowButtonShow?: boolean;
};
function BidCard({ item, isBidNowButtonShow = true }: BidCareType) {
  const navigate = useNavigate();
  const { timeLeft } = useCounter(item);
  //   const start = new Date();
  //   const end = new Date(item.bidEndTime);
  //   return calculateTimeDifference(start, end);
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       const { days, hours, minutes, seconds } = prevTime;

  //       if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
  //         clearInterval(interval);
  //         return prevTime;
  //       }

  //       let newDays = days;
  //       let newHours = hours;
  //       let newMinutes = minutes;
  //       let newSeconds = seconds - 1;

  //       if (newSeconds < 0) {
  //         newSeconds = 59;
  //         newMinutes -= 1;
  //       }
  //       if (newMinutes < 0) {
  //         newMinutes = 59;
  //         newHours -= 1;
  //       }
  //       if (newHours < 0) {
  //         newHours = 23;
  //         newDays -= 1;
  //       }

  //       return {
  //         days: newDays,
  //         hours: newHours,
  //         minutes: newMinutes,
  //         seconds: newSeconds,
  //       };
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timeLeft]);

  return (
    <div className="bid-card" key={item.id}>
      <div className="bid-card__image-container">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="bid-card__image"
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://via.placeholder.com/150?text=Image+Not+Available";
          }}
        />
      </div>

      <div className="bid-card__content">
        <div className="bid-card__status">Live Auction</div>
        <h3 className="bid-card__title">{item.name}</h3>

        <div className="bid-card__details">
          <p>
            Minimum Bid{" "}
            <span className="bid-card__price">{`$${
              item.minBidAmount ?? 0
            }`}</span>
          </p>
          <p>
            Current Bid{" "}
            <span className="bid-card__price">{`$${
              item.currentBidAmount ?? 0
            }`}</span>
          </p>
        </div>

        <p className="bid-card__timer">
          Ends in : {timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes}{" "}
          mins {timeLeft.seconds} sec
        </p>

        {isBidNowButtonShow && (
          <button
            className="bid-card__button"
            onClick={() => navigate(`/product/detail/${item.id}`)}
          >
            Bid now &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default BidCard;
