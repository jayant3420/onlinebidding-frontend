import { useState } from "react";
import axiosInstance from "../setup/axios/axiosSetup";
import constant from "../constant";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { BidHistoryItem } from "../pages/bidding/Auction.type";
import { getter } from "../util/storage";

interface HandleSubmitBidParamsType {
  userId: number;
  productId: number;
  bidAmount: number;
}

export const useBid = () => {
  const user = getter("user");
  const userJson = user ? JSON.parse(user) : null;

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitBid = async ({
    userId,
    productId,
    bidAmount,
  }: HandleSubmitBidParamsType) => {
    const baseUrl = constant.BASE_URL.LOCALHOST;
    try {
      setLoading(true);
      await axiosInstance({
        url: `${baseUrl}/api/v1/bid/create`,
        method: "POST",
        data: {
          userId,
          productId,
          bidAmount,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      const errMsg =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "An unexpected error occurred";
      toast.error(errMsg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const bidHistoryItemManage = (bidHistory: BidHistoryItem[]) => {
    if (!userJson) return bidHistory;

    const currentUserBids = bidHistory
      .filter((item) => item.userId === userJson.id)
      .sort((a, b) => {
        if (a.bidAmount > b.bidAmount) return -1;
        else if (a.bidAmount < b.bidAmount) return 1;
        return 0;
      });
    const otherUserBids = bidHistory.filter(
      (item) => item.userId !== userJson.id
    );

    const result = [];
    if (currentUserBids.length > 0) {
      result.push(currentUserBids[0]);
    }
    result.push(...otherUserBids);
    return result;
  };

  return {
    handleSubmitBid,
    loading,
    bidHistoryItemManage
  };
};
