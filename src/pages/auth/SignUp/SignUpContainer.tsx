import { useReducer, ChangeEvent, FormEvent, useContext } from "react";
import SignUpBanner from "./SignUpBanner";
import Input from "../../../component/Input/Input";
import Button from "../../../component/Button/Button";
import Apple from "../../../assets/icons/apple.svg";
import Google from "../../../assets/icons/google.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import { useSignup } from "../../../customhooks/useSignup";
import { SignUpContext } from "../../../context/SignUpContext";
import Loader from "../../../component/Loader/Spinner";

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

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

type StateType = "firstName" | "lastName" | "email" | "password";

type FormAction =
  | {
      type: "SET_VALUE";
      fieldName?: keyof FormState;
      value: string;
      error: string;
    }
  | { type: "SET_ERRORS"; errors: Partial<FormState> };

const formReducer = (state: FormState, action: FormAction) => {
  console.log(action);
  switch (action.type) {
    case "SET_VALUE":
      if (action.fieldName) {
        return {
          ...state,
          [action.fieldName]: {
            value: action.value,
            error: action.error ?? "",
          },
        };
      }
      return state;
    case "SET_ERRORS":
      return {
        ...state,
        ...action.errors,
      };
    default:
      return state;
  }
};

export function SignUpForm() {
  const initialState: FormState = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { validateForm, handleSubmit, loading } = useSignup();
  const context = useContext(SignUpContext);
  const setIsSignupSuccess = context?.setIsSignupSuccess;

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const fieldName = name as StateType;
    dispatch({ type: "SET_VALUE", fieldName, value, error: "" });
  }

  async function formSubmit(e: FormEvent) {
    e.preventDefault();
    const errors = validateForm(state);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      const payload = {
        firstName: state.firstName.value,
        lastName: state.lastName.value,
        email: state.email.value,
        password: state.password.value,
      };
      const response = await handleSubmit(payload);
      setIsSignupSuccess && setIsSignupSuccess(response);
    } else {
      const tempState: Partial<FormState> = {};
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const errorKey = key as keyof ValidationErrors;
          tempState[key as keyof typeof tempState] = {
            value: "",
            error: errors[errorKey] ?? "",
          };
        }
      }

      dispatch({ type: "SET_ERRORS", errors: tempState });
    }
  }
  console.log("state ==>>", state);
  return (
    <div className="login-form-container m-auto">
      <h2>Sign up</h2>
      <p className="subheading">
        New bidders, as soon as you have submitted your information you will be
        eligible to bid in the auction.
      </p>

      <form className="login-form" onSubmit={formSubmit}>
        <Input
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={state.firstName.value}
          errorMessage={state.firstName.error}
          onChange={onChange}
          id="firstname"
          autoComplete="off"
        />

        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={state.lastName.value}
          errorMessage={state.lastName.error}
          onChange={onChange}
          id="lastname"
          autoComplete="off"
        />

        <Input
          label="Email Address"
          type="text"
          name="email"
          placeholder="Enter your email address"
          value={state.email.value}
          errorMessage={state.email.error}
          onChange={onChange}
          id="email"
          autoComplete="off"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password.value}
          onChange={onChange}
          errorMessage={state.password.error}
          showPasswordToggle={true}
          id="password"
          autoComplete="off"
        />

        <div className="keep-signed-in">
          <input type="checkbox" id="keep-signed-in" />
          <label htmlFor="keep-signed-in">Receive outbid emails</label>
        </div>

        {
          loading ? (
            <Loader width={"100%"} textAlign="center" />
          ) : (
            <Button className="btn-continue" label="Submit" buttonType="submit" />
          )
        }


        <div className="or-sign-up">
          ------------------ or sign up with ------------------
        </div>
        <div className="social-login">
          <Button icon={Google} label="Google" />
          <Button icon={Apple} label="Apple" />
          <Button icon={Facebook} label="Facebook" />
        </div>

        <p className="signup-text">
          Want to know more? <a href="#">Auction rules</a>
        </p>
      </form>
    </div>
  );
}

function SignUpContainer() {
  return (
    <>
      <div className="login-container">
        <SignUpForm />
        <SignUpBanner />
      </div>
    </>
  );
}

export default SignUpContainer;
