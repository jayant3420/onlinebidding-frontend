import { useCounter } from "../../customhooks/useCounter";
import { ProductDetail } from "../../pages/bidding/Auction.type";

type BidCounterPropType = {
  item: ProductDetail;
};

function BidCounter({ item }: BidCounterPropType) {
  const { timeLeft } = useCounter(item);
  return (
    <div className="label">
      Ends in : {timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes}{" "}
      mins {timeLeft.seconds} sec
    </div>
  );
}

export default BidCounter;
