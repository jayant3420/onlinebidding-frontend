import ReviewCard from "../../component/Bid/ReviewCard";
import ReviewItems from "../../db.json";

function AuctionItemReview() {
  return (
    <div className="review-container-main">
      <div className="review-heading">Reviews</div>
      <div className="review-items">
        {ReviewItems.reviews.map((item: any) => {
          return <ReviewCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default AuctionItemReview;
