import Welcome from "../Welcome/Welcome";
import BidCard from "./BidCard";
import AuctionItems from "../../db.json";

function BidContainer() {
  return (
    <>
      <div className="auction-container">
        <Welcome name="Allivia" />
        <div className="auction-grid">
          {AuctionItems.auctions.map((item) => {
            return <BidCard item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BidContainer;
