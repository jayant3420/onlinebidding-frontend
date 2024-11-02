import { useState } from "react";
import { Modal } from "react-bootstrap";
import CrossIcon from "../../assets/icons/crossIcon.svg";
import BidFormInput from "../Input/BidFormInput";
import Button from "../Button/Button";
import RightIcon from "../../assets/icons/rightIcon.svg";
import { SubmitBidModalType } from "./SubmitBidModal.type";
import SuccessModal from "./SuccessModal";

function SubmitBidModal({ isModalOpen, setIsModalOpen }: SubmitBidModalType) {
  const [bid, setBid] = useState({
    straightBid: { value: 0, err: "" },
    maxBid: { value: 0, err: "" },
  });

  function updateBidAmount(
    bidAmount: number,
    type: "INCREMENT" | "DECREMENT",
    updateType: "STRAIGHT_BID" | "MAX_BID"
  ) {
    const bidKey = updateType === "STRAIGHT_BID" ? "straightBid" : "maxBid";
    const adjustment = type === "DECREMENT" ? -1 : 1;

    setBid((prevBid) => ({
      ...prevBid,
      [bidKey]: {
        value: bidAmount + adjustment,
        err: "",
      },
    }));
  }

  return (
    <Modal
      show={isModalOpen}
      fullscreen="lg-down"
      className="blur-bg"
      centered
      onHide={() => setIsModalOpen(!isModalOpen)}
    >
      <div className="submit-form-container">
        <div className="form-heading-main">
          <div className="f-heading">
            <span>Submit Bid</span>
            <span> | </span>
            <span>Sony Black Headphones</span>
          </div>
          <span className="cross-icon">
            <img
              src={CrossIcon}
              alt="cross icon"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          </span>
        </div>
        {true ? (
          <SuccessModal />
        ) : (
          <>
            <div className="form-body">
              <BidFormInput
                label="Straight bid"
                bid={0}
                updateBidAmount={updateBidAmount}
              />
              <BidFormInput
                label="Maximum bid"
                bid={0}
                updateBidAmount={updateBidAmount}
              />
            </div>
            <div className="form-footer">
              <div className="bid-info">
                <div className="label">Minimum Bid</div>
                <div className="value">$100</div>
              </div>
              <div className="bid-info">
                <div className="label">Current Bid</div>
                <div className="value">$157</div>
              </div>
              <div className="bid-info">
                <div className="label">Ends in: 1 day 12 hrs 43 minutes</div>
                {/* <div className="value"></div> */}
              </div>
              <div className="btn-container">
                <Button label="Submit" afterIcon={RightIcon} />
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default SubmitBidModal;
