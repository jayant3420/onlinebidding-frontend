import { useState } from "react";
import Constant from "../constant";

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
      const response = await fetch(Constant.BASE_URL.LOCALHOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      console.log("Login successful:", result);
      return result;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error };
};
