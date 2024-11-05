import React, { createContext, useState, ReactNode } from "react";
import { ProductDetail } from "../pages/bidding/Auction.type";

interface AunctionContextType {
  productDetail: ProductDetail | null;
  setProductDetail: (param: ProductDetail) => void;
}

interface AuctionProviderProps {
  children: ReactNode;
}

export const AuctionContext = createContext<AunctionContextType | null>(null);

export const AuctionProvider: React.FC<AuctionProviderProps> = ({
  children,
}) => {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null
  );
  return (
    <AuctionContext.Provider
      value={{
        productDetail,
        setProductDetail,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};
