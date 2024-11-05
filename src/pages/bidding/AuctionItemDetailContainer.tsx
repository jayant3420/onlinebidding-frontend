import { useEffect, useContext } from "react";
import AuctionBidHistory from "./AuctionBidHistory";
import AuctionItemDescription from "./AuctionItemDescription";
import AuctionItemDetail from "./AuctionItemDetail";
import { useParams } from "react-router-dom";
import { useProduct } from "../../customhooks/useProduct";
import Loader from "../../component/Loader/Spinner";
import { ProductDetail } from "./Auction.type";
import { AuctionContext } from "../../context/AuctionContext";

function AuctionItemDetailContainer() {
  const auctionContext = useContext(AuctionContext);
  const productDetail = auctionContext?.productDetail;
  const setProductDetail = auctionContext?.setProductDetail;

  const { id } = useParams();
  const { getProductDetail, loading } = useProduct();

  useEffect(() => {
    async function fetchProductDetail() {
      let response = null;
      if (id) {
        response = await getProductDetail({ productId: parseInt(id) });
      }
      const product: ProductDetail = {
        id: response.id,
        name: response.name,
        minBidAmount: response.minBidAmount,
        currentBidAmount: response.currentBidAmount,
        description: response.description,
        bidStartTime: response.bidStartTime,
        bidEndTime: response.bidEndTime,
        imageUrl: response.imageUrl,
        bids: response.bids,
      };
      setProductDetail && setProductDetail(product);
    }
    fetchProductDetail();
  }, []);

  if (loading) {
    return <Loader width={"100%"} textAlign="center" />;
  } else if (!productDetail) {
    return <div>No Data Found</div>;
  } else {
    return (
      <div className="item-detail-container">
        <AuctionItemDetail item={productDetail} />
        <AuctionItemDescription />
        <AuctionBidHistory
          bidHistory={productDetail.bids}
          item={productDetail}
        />
      </div>
    );
  }
}

export default AuctionItemDetailContainer;
