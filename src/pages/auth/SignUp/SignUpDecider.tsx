import { useContext } from "react";
import SignUpSuccess from "./SignUpSuccess";
import SignUpContainer from "./SignUpContainer";
import { SignUpContext } from "../../../context/SignUpContext";

function SignUpDecider() {
  const context = useContext(SignUpContext);
  const isSignupSuccess = context?.isSignupSuccess;
    console.log(isSignupSuccess)
  return isSignupSuccess ? <SignUpSuccess /> : <SignUpContainer />;
}

export default SignUpDecider;
