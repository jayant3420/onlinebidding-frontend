import LeftIconSvg from "../../assets/icons/leftIcon.svg";
import BidCard from "../../component/Bid/BidCard";
import { useNavigate } from "react-router-dom";
import { ItemDetailProp } from "./Auction.type";

function AuctionItemDetail({ item }: ItemDetailProp) {
  const navigate = useNavigate();
  return (
    <div className="item-detail-main" onClick={() => navigate(-1)}>
      <div className="back-button">
        <img src={LeftIconSvg} alt="Left Icon" />
        <span>Back to catalog</span>
      </div>
      <BidCard item={item} isBidNowButtonShow={false} />
    </div>
  );
}

export default AuctionItemDetail;
