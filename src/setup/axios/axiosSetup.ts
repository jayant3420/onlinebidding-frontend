import axios, {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosError,
} from "axios";
import constant from "../../constant";

const baseURL = constant.BASE_URL.LOCALHOST;
const headers = {
  "Content-Type": "application/json",
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const token = "";
  if (req.headers) {
    req.headers.set("Authorization", `Bearer ${token}`);
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  },
  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;