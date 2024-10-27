import LeftIconSvg from "../../assets/icons/leftIcon.svg";
import BidCard from "../../component/Bid/BidCard";

const item = {
  id: 1,
  title: "Sony Black Headphones",
  image:
    "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UY327_FMwebp_QL65_.jpg",
  min_bid: 100,
  current_bid: 157,
  ends_in: "1 day 12 hrs 43 minutes",
};

function AuctionItemDetail() {
  return (
    <div className="item-detail-main">
      <div className="back-button">
        <img src={LeftIconSvg} alt="Left Icon" />
        <span>Back to catalog</span>
      </div>
      <BidCard item={item} isBidNowButtonShow = {false} />
    </div>
  );
}

export default AuctionItemDetail;
