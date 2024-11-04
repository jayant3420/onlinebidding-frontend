import { useState, useContext } from "react";
import Constant from "../constant";
import axios, { AxiosError } from "axios";
import { setter } from "../util/storage";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormField {
  value: string;
  error: string;
}

interface FormState {
  firstName: FormField;
  lastName: FormField;
  email: FormField;
  password: FormField;
}

interface UseSignUpReturn {
  handleSubmit: (data: SignUpData) => Promise<boolean>;
  validateForm: (state: FormState) => ValidationErrors;
  loading: boolean;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const useSignup = (): UseSignUpReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (data: SignUpData) => {
    setLoading(true);
    try {
      const response = await axios({
        url: `${Constant.BASE_URL.LOCALHOST}/api/v1/user/sign-up`,
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_PUBLIC_API_KEY,
        },
        data,
      });

      console.log("response ==>>", response.data.data);
      return true;
    } catch (err) {
      console.log(err)
      const errMsg = (err as AxiosError<{message: string}>)?.response?.data?.message || "An unexpected error occurred";
      toast.error(errMsg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (state: FormState) => {
    const nameRegex = /^[a-zA-Z0-9]{3,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const errors: ValidationErrors = {};

    if (!state.firstName.value || !nameRegex.test(state.firstName.value)) {
      errors.firstName =
        "First name must be 3-50 characters and contain only letters or numbers only.";
    }

    if (!state.lastName.value || !nameRegex.test(state.lastName.value)) {
      errors.lastName =
        "Last name must be 3-50 characters and contain only letters or numbers only.";
    }

    if (!state.email.value || !emailRegex.test(state.email.value)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!state.password.value || !passwordRegex.test(state.password.value)) {
      errors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.";
    }

    return errors;
  };

  return { handleSubmit, validateForm, loading };
};
