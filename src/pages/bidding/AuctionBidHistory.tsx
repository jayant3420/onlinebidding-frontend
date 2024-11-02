import Button from "../../component/Button/Button";
import DummyData from "../../db.json";
import SubmitBidModal from "../../component/modal/SubmitBidModal";
import { useState } from "react";

function AuctionBidHistory() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  function handleClick() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
      <div className="bid-history">
        <ul>
          {DummyData.bidHistory.map((item, index) => {
            if (index === 0) {
              return <li key={item.id}>{`Your bid is $${item.bidAmount}`}</li>;
            } else {
              return (
                <li key={item.id}>{`${item.user} bids $${item.bidAmount}`}</li>
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
