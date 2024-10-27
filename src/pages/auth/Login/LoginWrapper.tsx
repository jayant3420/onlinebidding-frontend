import LoginHeader from "../../../component/Header/LoginHeader";
import LoginContainer from "./LoginContainer";

function LoginWrapper() {
  return (
    <>
      <div className="login-wrapper">
        <LoginHeader />
        <LoginContainer />
      </div>
    </>
  );
}

export default LoginWrapper;
