import { useEffect, useState } from "react";
import AuctionBidHistory from "./AuctionBidHistory";
import AuctionItemDescription from "./AuctionItemDescription";
import AuctionItemDetail from "./AuctionItemDetail";
import { useParams } from "react-router-dom";
import { useProduct } from "../../customhooks/useProduct";
import Loader from "../../component/Loader/Spinner";
import { ProductDetail } from "./Auction.type";

function AuctionItemDetailContainer() {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const { id } = useParams();
  console.log(id);
  const { getProductDetail, loading } = useProduct();
  console.log(productDetail);

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
        bids: response.bids
      }
      setProductDetail(product);
    }
    fetchProductDetail();
  }, []);

  if (loading) {
    return <Loader width={"100%"} textAlign="center" />;
  } else if (productDetail === null) {
    return <div>No Data Found</div>;
  } else {
    return (
      <div className="item-detail-container">
        <AuctionItemDetail item={productDetail} />
        <AuctionItemDescription />
        <AuctionBidHistory bidHistory={productDetail.bids} />
      </div>
    );
  }
}

export default AuctionItemDetailContainer;
