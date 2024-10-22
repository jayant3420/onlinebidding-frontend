function BidCard() {
  return (
    <div className="bid-card">
      <div className="bid-card__image-container">
        <img
          src="headphones.jpg"
          alt="Sony Black Headphones"
          className="bid-card__image"
        />
        <span className="bid-card__favorite">&#9829;</span>
      </div>

      <div className="bid-card__content">
        <div className="bid-card__status">Live Auction</div>
        <h3 className="bid-card__title">Sony Black Headphones</h3>

        <div className="bid-card__details">
          <p>
            Minimum Bid <span className="bid-card__price">$100</span>
          </p>
          <p>
            Current Bid <span className="bid-card__price">$157</span>
          </p>
        </div>

        <p className="bid-card__timer">Ends in : 1 day 12 hrs 43 minutes</p>

        <button className="bid-card__button">Bid now &gt;</button>
      </div>
    </div>
  );
}

export default BidCard;
