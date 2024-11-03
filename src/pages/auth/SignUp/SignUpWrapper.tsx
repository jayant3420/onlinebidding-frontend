import SignUpHeader from "../../../component/Header/LoginHeader";
import SignUpContainer from "./SignUpContainer";
import SignUpSuccess from "./SignUpSuccess";

function SignUpWrapper() {
  return (
    <>
      <div className="login-wrapper">
        <SignUpHeader />
        <SignUpContainer />
        {/* <SignUpSuccess /> */}
      </div>
    </>
  );
}

export default SignUpWrapper;
