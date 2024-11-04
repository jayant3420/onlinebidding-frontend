import { useContext } from "react";
import SignUpHeader from "../../../component/Header/LoginHeader";
import SignUpContainer from "./SignUpContainer";
import SignUpSuccess from "./SignUpSuccess";
import { SignUpProvider, SignUpContext } from "../../../context/SignUpContext";
import SignUpDecider from "./SignUpDecider";

function SignUpWrapper() {
  return (
    <>
      <SignUpProvider>
        <div className="login-wrapper">
          <SignUpHeader />
          <SignUpDecider />
        </div>
      </SignUpProvider>
    </>
  );
}

export default SignUpWrapper;
