import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import AuctionItemDetailContainer from "./AuctionItemDetailContainer";

function AuctionPageDecider() {
    const authContext = useContext(AuthContext)?.user ?? null;
    return authContext ? <AuctionItemDetailContainer /> : <Navigate to="/auth/login" />;
}

export default AuctionPageDecider;