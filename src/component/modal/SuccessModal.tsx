import SuccessIcon from "../../assets/images/success.png";

function SuccessModal() {
  return (
    <div className="success-modal-container">
      <div className="img-container">
        <img src={SuccessIcon} alt="" />
      </div>
      <div>Bid submitted successfully</div>
      <div>Thank you!</div>
    </div>
  );
}

export default SuccessModal;
