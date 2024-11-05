import { useEffect } from "react";
import Welcome from "../Welcome/Welcome";
import BidCard from "./BidCard";
import { useProduct } from "../../customhooks/useProduct";

function BidContainer({ user }: any) {
  const { getProductList, product, setProduct } = useProduct();

  useEffect(() => {
    async function fetchProducts() {
      const res = await getProductList({ page: 1, pageSize: 20 });
      setProduct && setProduct(res);
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
