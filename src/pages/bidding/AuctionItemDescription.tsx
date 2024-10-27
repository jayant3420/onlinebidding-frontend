import AuctionItemReview from "./AuctionItemReview";

function AuctionItemDescription() {
  return (
    <div className="item-description-main">
      <div className="heading">Description</div>
      <div className="description">
        <p>
          Immerse yourself in pristine sound quality with the Sony Black
          Headphones. Crafted for audiophiles and casual listeners alike, these
          headphones deliver an exceptional audio experience with deep, resonant
          bass and crystal-clear highs. The sleek black design complements any
          style, whether you're on the go or relaxing at home.
        </p>

        <p>
          Equipped with advanced noise-canceling technology, these headphones
          block out distractions so you can enjoy your music, podcasts, or calls
          without interference. Comfort is key with plush ear cushions that
          provide long-lasting comfort for extended listening sessions.
        </p>

        <p>
          Designed for convenience, these headphones feature easy-to-use
          controls for adjusting volume, skipping tracks, and taking calls on
          the go. Foldable and compact, they're perfect for travel and storage,
          ensuring you can take your music with you wherever you go.
        </p>

        <p>
          Whether you're commuting, working out, or simply unwinding, the Sony
          Black Headphones offer premium sound quality and comfort that elevate
          your listening experience to new heights.
        </p>
      </div>
      <AuctionItemReview />
    </div>
  );
}

export default AuctionItemDescription;
