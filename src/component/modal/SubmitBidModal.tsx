import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import CrossIcon from "../../assets/icons/crossIcon.svg";
import BidFormInput from "../Input/BidFormInput";
import Button from "../Button/Button";
import RightIcon from "../../assets/icons/rightIcon.svg";
import { SubmitBidModalType } from "./SubmitBidModal.type";
import SuccessModal from "./SuccessModal";
import { useBid } from "../../customhooks/useBid";
import { getter } from "../../util/storage";
import { useProduct } from "../../customhooks/useProduct";
import Loader from "../Loader/Spinner";
import { AuctionContext } from "../../context/AuctionContext";
import BidCounter from "../Bid/BidCounter";

function SubmitBidModal({
  isModalOpen,
  setIsModalOpen,
  item,
}: SubmitBidModalType) {
  const auctionContext = useContext(AuctionContext);
  const setProductDetail = auctionContext?.setProductDetail;

  const [isBidSubmitted, setIsBidSubmitted] = useState<boolean>(false);
  const { handleSubmitBid, loading } = useBid();
  const { getProductDetail } = useProduct();
  const user = getter("user");
  const userJson = user ? JSON.parse(user) : null;

  const [bid, setBid] = useState({
    straightBid: { value: 0, err: "" },
    // maxBid: { value: 0, err: "" },
  });
  console.log("bid ==>>", bid);
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

  function handleBidAmountChange(value: string) {
    console.log("value ==>>", value);
    const cleanedValue = value.startsWith("0") ? value.slice(1) : value;
    const parsedValue = parseInt(cleanedValue, 10);
    console.log("parsedValue ==>>", parsedValue);

    if (isNaN(parsedValue)) {
      setBid({
        straightBid: {
          value: 0,
          err: "Only numbers are allowed",
        },
      });
      return;
    }

    setBid({
      straightBid: {
        value: isNaN(parsedValue) ? 0 : parsedValue,
        err: "",
      },
    });
  }

  async function handleSubmit() {
    const timeDiff = new Date(item.bidEndTime).getTime() - new Date().getTime();
    let error: string = "";
    if (bid.straightBid.value < parseInt(item.minBidAmount)) {
      error = "Bid amount can not be less than minimum bid amount";
    } else if (bid.straightBid.value < parseInt(item.currentBidAmount)) {
      error = "Bid amount can not be less than current bid amount";
    } else if (timeDiff <= 0) {
      error = "Bid time is over";
    }

    if (error) {
      setBid({
        straightBid: {
          value: bid.straightBid.value,
          err: error,
        },
      });
      return;
    }

    const res = await handleSubmitBid({
      userId: userJson.id,
      productId: item.id,
      bidAmount: bid.straightBid.value,
    });

    if (res) {
      const response = await getProductDetail({ productId: item.id });
      setProductDetail && setProductDetail(response);
      setIsBidSubmitted(true);
    }
  }

  function handleModalClose() {
    if (isBidSubmitted) {
      setIsBidSubmitted(false);
    }
    setIsModalOpen(false);
    setBid({
      straightBid: {
        value: 0,
        err: "",
      },
    });
  }

  return (
    <Modal
      show={isModalOpen}
      fullscreen="lg-down"
      className="blur-bg"
      centered
      onHide={handleModalClose}
    >
      <div className="submit-form-container">
        <div className="form-heading-main">
          <div className="f-heading">
            <span>Submit Bid</span>
            <span> | </span>
            <span>{item.name}</span>
          </div>
          <span className="cross-icon">
            <img src={CrossIcon} alt="cross icon" onClick={handleModalClose} />
          </span>
        </div>
        {isBidSubmitted ? (
          <SuccessModal />
        ) : (
          <>
            <div className="form-body">
              <BidFormInput
                label="Straight bid"
                bid={bid.straightBid.value}
                updateBidAmount={updateBidAmount}
                handleBidAmountChange={handleBidAmountChange}
              />
              <span className="error">{bid.straightBid.err}</span>
              {/* <BidFormInput
                label="Maximum bid"
                bid={bid.maxBid.value}
                updateBidAmount={updateBidAmount}
              /> */}
            </div>
            <div className="form-footer">
              <div className="bid-info">
                <div className="label">Minimum Bid</div>
                <div className="value">${item.minBidAmount ?? 0}</div>
              </div>
              <div className="bid-info">
                <div className="label">Current Bid</div>
                <div className="value">${item.currentBidAmount ?? 0}</div>
              </div>
              <div className="bid-info">
                <BidCounter item={item} />
                {/* <div className="value"></div> */}
              </div>
              <div className="btn-container">
                {loading ? (
                  <Loader width="100%" textAlign="right" />
                ) : (
                  <Button
                    label="Submit"
                    afterIcon={RightIcon}
                    onClick={handleSubmit}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default SubmitBidModal;
