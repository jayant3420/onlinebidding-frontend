import { useState, useContext } from "react";
import Constant from "../constant";
import axios, { AxiosError } from "axios";
import { setter } from "../util/storage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
interface LoginData {
  email: string;
  password: string;
}

interface UseLoginReturn {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    data: LoginData
  ) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log("error ==>>", error);
  const authContext = useContext(AuthContext);

  const setUserDetail = authContext?.setUserDetail || null;

  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: LoginData
  ) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: `${Constant.BASE_URL.LOCALHOST}/api/v1/user/login`,
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_PUBLIC_API_KEY,
        },
        data,
      });

      console.log("response ==>>", response.data.data);
      setter("user", JSON.stringify(response.data.data));

      if (setUserDetail !== null) setUserDetail(response.data.data);

      navigate("/");
      // return response.data.data;
    } catch (err) {
      console.log(err)
      const errMsg = (err as AxiosError<{message: string}>)?.response?.data?.message || "An unexpected error occurred";
      setError(errMsg);
      toast.error(errMsg)
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error };
};
