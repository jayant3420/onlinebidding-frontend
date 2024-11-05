export interface UserData {
    firstName: string;
    lastName: string;
}

export interface BidHistoryItem {
    id: number;
    userId: number;
    productId: number;
    bidAmount: string;
    user: UserData;
};

export interface ProductDetail {
    id: number;
    name: string;
    minBidAmount: string;
    currentBidAmount: string;
    description: string;
    bidStartTime: string;
    bidEndTime: string;
    imageUrl: string;
    bids: BidHistoryItem[];
};

export interface ItemDetailProp {
    item: ProductDetail;
}

export interface BidHistoryProp {
    bidHistory: BidHistoryItem[];
    item: ProductDetail;
}