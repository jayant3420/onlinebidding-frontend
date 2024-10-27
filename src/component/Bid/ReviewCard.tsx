import StarFilled from "../../assets/icons/starfilled.svg";
import StarEmpty from "../../assets/icons/starempty.svg";
import Review1 from '../../assets/images/Review1.png';
import Review2 from '../../assets/images/Review2.png';
import Review3 from '../../assets/images/Review3.png';

const images: Record<string, string> = {
    Review1,
    Review2,
    Review3
}

type ReviewCardItemType = {
  image?: string;
  reviewCount: number;
  comment: string;
  reviewedBy: string;
  reviewedAt: string;
};

type ReviewCardPropsType = {
  item: ReviewCardItemType;
};

export function GetReviewedStar({ count }: { count: number }) {
  const arr = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <>
      {arr.map((i, index) => {
        return (
          <span key={index}>
            <img
              src={i <= count ? StarFilled : StarEmpty}
              alt="review star icon"
            />
          </span>
        );
      })}
    </>
  );
}

function ReviewCard({ item }: ReviewCardPropsType) {
  return (
    <div className="review-card-container">
      <div className="reviewer-image">
        <img src={item.image ? images[item.image] : ""} alt="Reviewer image" />
      </div>
      <div className="review-section">
        <div className="star-section">
          <GetReviewedStar count={item.reviewCount} />
        </div>
        <div className="review-comment">{item.comment}</div>
        <div className="comment-by">{item.reviewedBy}</div>
        <div className="comment-at">{item.reviewedAt}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
