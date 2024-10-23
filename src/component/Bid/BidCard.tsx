function BidCard({ item }: any) {
  return (
    <div className="bid-card">
      <div className="bid-card__image-container">
        <img
          src={item.image}
          alt={item.title}
          className="bid-card__image"
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://via.placeholder.com/150?text=Image+Not+Available";
          }}
        />
        {/* <span className="bid-card__favorite">&#9829;</span> */}
      </div>

      <div className="bid-card__content">
        <div className="bid-card__status">Live Auction</div>
        <h3 className="bid-card__title">{item.title}</h3>

        <div className="bid-card__details">
          <p>
            Minimum Bid{" "}
            <span className="bid-card__price">{`$${item.min_bid}`}</span>
          </p>
          <p>
            Current Bid{" "}
            <span className="bid-card__price">{`$${item.current_bid}`}</span>
          </p>
        </div>

        <p className="bid-card__timer">Ends in : {item.ends_in}</p>

        <button className="bid-card__button">Bid now &gt;</button>
      </div>
    </div>
  );
}

export default BidCard;
