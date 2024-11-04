import { useEffect, useState } from "react";
import Welcome from "../Welcome/Welcome";
import BidCard from "./BidCard";
import AuctionItems from "../../db.json";
import { useProduct } from "../../customhooks/useProduct";

interface ProductData {
  data: Array<unknown>;
  currentPage: number;
  totalItems: number;
  totalPages: number;
}

function BidContainer({ user }: any) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const { getProductList } = useProduct();
  console.log(product);

  useEffect(() => {
    async function fetchProducts() {
      const res = await getProductList({ page: 1, pageSize: 10 });
      setProduct(res);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="auction-container">
        <Welcome
          name={`${user ? `${user?.firstName} ${user?.lastName}` : ""}`}
        />
        <div className="auction-grid">
          {product?.data.map((item) => {
            return (
              <BidCard item={item} key={Math.floor(Math.random() * 100000)} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BidContainer;
