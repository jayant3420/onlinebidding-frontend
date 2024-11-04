import Button from "../../component/Button/Button";
import SubmitBidModal from "../../component/modal/SubmitBidModal";
import { useState } from "react";
import { BidHistoryProp } from "./Auction.type";

function AuctionBidHistory({ bidHistory }: BidHistoryProp) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  function handleClick() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
      <div className="bid-history">
        <ul>
          {bidHistory.map((item, index) => {
            if (index === 0) {
              return <li key={item.id}>{`Your bid is $${item.bidAmount}`}</li>;
            } else {
              return (
                <li key={item.id}>{`${item.user.firstName} bids $${item.bidAmount}`}</li>
              );
            }
          })}
        </ul>
        <div className="bid-now-btn">
          <Button label="Bid now" onClick={handleClick} />
        </div>
      </div>
      <SubmitBidModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default AuctionBidHistory;
