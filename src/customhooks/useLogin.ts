import { useState } from "react";
import Constant from "../constant";
import axios from "axios";

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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: LoginData
  ) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      console.log("api key ==>>", process.env.REACT_APP_PUBLIC_API_KEY);
      const response = await axios({
        url: `${Constant.BASE_URL.LOCALHOST}/api/v1/user/login`,
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_PUBLIC_API_KEY,
        },
        data,
      });

      console.log("response ==>>", response);
      return response.data.result;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error };
};
