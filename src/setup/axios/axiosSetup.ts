import axios, {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosError,
} from "axios";
import constant from "../../constant";
import { getter } from "../../util/storage";

const baseURL = constant.BASE_URL.LOCALHOST;
const headers = {
  "Content-Type": "application/json",
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const user = getter("user");
  const userJson = user ? JSON.parse(user) : null;
  const accessToken = userJson.accessToken;
  if (req.headers) {
    req.headers.set("Authorization", `${accessToken}`);
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
console.log(axiosInstance);
export default axiosInstance;
