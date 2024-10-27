import { useState } from "react";
import Constant from "../constant";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UseSignUpReturn {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    data: SignUpData
  ) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useSignup = (): UseSignUpReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: SignUpData
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
      console.log("SignUp successful:", result);
      return result;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error };
};
