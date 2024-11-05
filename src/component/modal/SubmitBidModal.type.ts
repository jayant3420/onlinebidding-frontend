import { ProductDetail } from "../../pages/bidding/Auction.type";

export type SubmitBidModalType = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    item: ProductDetail;
}