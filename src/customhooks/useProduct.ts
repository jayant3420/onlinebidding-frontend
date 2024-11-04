import { useState } from "react";
import constant from "../constant";
import axiosInstance from "../setup/axios/axiosSetup";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

type ProductListParamType = {
  page: number;
  pageSize: number;
};

type ProductDetailPropType = {
  productId: number;
};

export const useProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const baseURL = constant.BASE_URL.LOCALHOST;

  async function getProductList({ page, pageSize }: ProductListParamType) {
    try {
      const response = await axios({
        url: `${baseURL}/api/v1/product/list`,
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_PUBLIC_API_KEY,
        },
        params: {
          page,
          pageSize,
        },
      });
      return response.data.data;
    } catch (err) {
      console.log(err);
      const errMsg =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "An unexpected error occurred";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  }

  async function getProductDetail({ productId }: ProductDetailPropType) {
    try {
      const response = await axiosInstance({
        url: `${baseURL}/api/v1/product/detail`,
        method: "GET",
        params: {
          productId,
        },
      });
      return response.data.data;
    } catch (err) {
      console.log(err);
      const errMsg =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "An unexpected error occurred";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  }

  return {
    getProductList,
    getProductDetail,
    loading
  };
};
