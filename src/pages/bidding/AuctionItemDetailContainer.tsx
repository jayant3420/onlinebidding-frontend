import AuctionBidHistory from "./AuctionBidHistory";
import AuctionItemDescription from "./AuctionItemDescription";
import AuctionItemDetail from "./AuctionItemDetail";

function AuctionItemDetailContainer() {
    return (
        <div className="item-detail-container">
            <AuctionItemDetail />
            <AuctionItemDescription />
            <AuctionBidHistory />
        </div>
    )
}

export default AuctionItemDetailContainer;