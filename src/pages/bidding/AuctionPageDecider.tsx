import { Navigate } from "react-router-dom";
import AuctionItemDetailContainer from "./AuctionItemDetailContainer";
import { getter } from "../../util/storage";
import { AuctionProvider } from "../../context/AuctionContext";

function AuctionPageDecider() {
  const user = getter("user");
  return user ? (
    <AuctionProvider>
      <AuctionItemDetailContainer />
    </AuctionProvider>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default AuctionPageDecider;
