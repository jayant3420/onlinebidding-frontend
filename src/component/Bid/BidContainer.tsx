import Welcome from "../Welcome/Welcome";
import BidCard from "./BidCard";
import AuctionItems from "../../db.json";

function BidContainer() {
  return (
    <>
      <div className="auction-container">
        <Welcome />
        <div className="auction-grid">
          {AuctionItems.auctions.map((item, index: number) => {
            return <BidCard item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BidContainer;
