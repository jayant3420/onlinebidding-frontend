import { useState } from "react";
import LoginBanner from "./LoginBanner";
import Input from "../../../component/Input/Input";
import { useLogin } from "../../../customhooks/useLogin";
import Button from "../../../component/Button/Button";
import Apple from "../../../assets/icons/apple.svg";
import Google from "../../../assets/icons/google.svg";
import Facebook from "../../../assets/icons/facebook.svg";

type InputState = {
  value: string;
  error: string;
};

export function LoginForm() {
  const [email, setEmail] = useState<InputState>({ value: "", error: "" });
  const [password, setPassword] = useState<InputState>({
    value: "",
    error: "",
  });
  const { handleSubmit, error } = useLogin();

  return (
    <div className="login-form-container m-auto">
      <h1>Login</h1>
      <p className="subheading">
        Welcome back. Enter your credentials to access your account
      </p>

      <form
        className="login-form"
        onSubmit={(e) =>
          handleSubmit(e, { email: email.value, password: password.value })
        }
      >
        <Input
          label="Email Address"
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={email.value}
          onChange={(e) =>
            setEmail({
              value: e.target.value,
              error: "",
            })
          }
          required
          autoComplete="off"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password.value}
          onChange={(e) =>
            setPassword({
              value: e.target.value,
              error: "",
            })
          }
          errorMessage={password.error}
          showPasswordToggle={true}
          autoComplete="off"
          // isForgotPwdShow={true}
        />

        <div className="keep-signed-in">
          <input type="checkbox" id="keep-signed-in" />
          <label htmlFor="keep-signed-in">Keep me signed in</label>
        </div>

        <Button
          className="btn-continue"
          label="Continue"
          buttonType="submit"
        />

        <div className="or-sign-up">
          ------------------ or sign in with ------------------
        </div>
        <div className="social-login">
          <Button icon={Google} label="Google" />
          <Button icon={Apple} label="Apple" />
          <Button icon={Facebook} label="Facebook" />
        </div>

        <p className="signup-text">
          Don't have an Account? <a href="#">Sign up here</a>
        </p>
      </form>
    </div>
  );
}

function LoginContainer() {
  return (
    <>
      <div className="login-container">
        <LoginForm />
        <LoginBanner />
      </div>
    </>
  );
}

export default LoginContainer;
