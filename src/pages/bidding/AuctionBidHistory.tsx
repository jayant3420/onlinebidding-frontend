import Button from "../../component/Button/Button";
import DummyData from "../../db.json";
import SubmitBidModal from "../../component/modal/SubmitBidModal";

function AuctionBidHistory() {
  function handleClick() {}

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
      <SubmitBidModal />
    </>
  );
}

export default AuctionBidHistory;
