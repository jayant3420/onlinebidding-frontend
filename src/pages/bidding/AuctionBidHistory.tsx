import Button from "../../component/Button/Button";
import SubmitBidModal from "../../component/modal/SubmitBidModal";
import { useState } from "react";
import { BidHistoryProp } from "./Auction.type";
import { useBid } from "../../customhooks/useBid";
import { getter } from "../../util/storage";

function AuctionBidHistory({ bidHistory, item }: BidHistoryProp) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const user = getter("user");
  const userJson = user ? JSON.parse(user) : null;

  function handleClick() {
    setIsModalOpen((prev) => !prev);
  }
  const { bidHistoryItemManage } = useBid();
  const result = bidHistoryItemManage(bidHistory);

  return (
    <>
      <div className="bid-history">
        <div className="bid-history-list">
          <ul>
            {result.map((item, index) => {
              if (index === 0 && userJson && item.userId === userJson.id) {
                return (
                  <li key={item.id}>{`Your bid is $${item.bidAmount}`}</li>
                );
              } else {
                return (
                  <li
                    key={item.id}
                  >{`${item.user.firstName} bids $${item.bidAmount}`}</li>
                );
              }
            })}
          </ul>
        </div>
        <div className="bid-now-btn">
          <Button label="Bid now" onClick={handleClick} />
        </div>
      </div>
      <SubmitBidModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        item={item}
      />
    </>
  );
}

export default AuctionBidHistory;
