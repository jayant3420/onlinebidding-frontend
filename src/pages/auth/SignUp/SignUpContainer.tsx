import { useState, useReducer, ChangeEvent, FormEvent } from "react";
import SignUpBanner from "./SignUpBanner";
import Input from "../../../component/Input/Input";
import { useLogin } from "../../../customhooks/useLogin";
import Button from "../../../component/Button/Button";
import Apple from "../../../assets/icons/apple.svg";
import Google from "../../../assets/icons/google.svg";
import Facebook from "../../../assets/icons/facebook.svg";

type FieldState = {
  value: string;
  error: string;
};

type FormState = {
  [key: string]: FieldState;
};

type FormAction = {
  name: string;
  value: string;
  error?: string;
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  return {
    ...state,
    [action.name]: {
      value: action.value,
      error: action.error ?? state[action.name].error,
    },
  };
};

export function SignUpForm() {
  const [state, dispatch] = useReducer(formReducer, {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const { handleSubmit, error } = useLogin();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch({ name, value });
  }

  return (
    <div className="login-form-container m-auto">
      <h2>Sign up</h2>
      <p className="subheading">
        New bidders, as soon as you have submitted your information you will be
        eligible to bid in the auction.
      </p>

      <form
        className="login-form"
        // onSubmit={(e) =>
        //   handleSubmit(e, { email: email.value, password: password.value })
        // }
      >
        <Input
          label="First Name"
          type="text"
          name="firstname"
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
          name="lastname"
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
          showPasswordToggle={false}
          id="password"
          autoComplete="off"
        />

        <div className="keep-signed-in">
          <input type="checkbox" id="keep-signed-in" />
          <label htmlFor="keep-signed-in">Receive outbid emails</label>
        </div>

        <Button className="btn-continue" label="Submit" buttonType="submit" />

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

// function SignUpContainer() {
//   return (
//     <input />
//   )
// }

// export default SignUpContainer;
