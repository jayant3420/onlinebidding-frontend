import Button from "../Button/Button";
import { BidFormInputProps } from "./Input.type";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

function BidFormInput({
  label,
  bid,
  updateBidAmount,
  handleBidAmountChange,
}: BidFormInputProps) {
  const bidType = label.toUpperCase().replace(" ", "_") as
    | "MAX_BID"
    | "STRAIGHT_BID";
    console.log("bid ==>>", bid);
  return (
    <>
      <div className="bid-input-main">
        <label className="label">{label}</label>
        <div className="bid-input">
          <span className="currency-symbol">$</span>
          <input
            type="text"
            value={bid}
            onChange={(e) => handleBidAmountChange(e.target.value)}
          />
          <button
            type="button"
            onClick={() => updateBidAmount(bid, "DECREMENT", bidType)}
          >
            <img src={MinusIcon} alt="minus icon" />
          </button>
          <button
            type="button"
            onClick={() => updateBidAmount(bid, "INCREMENT", bidType)}
          >
            <img src={PlusIcon} alt="plus icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BidFormInput;
