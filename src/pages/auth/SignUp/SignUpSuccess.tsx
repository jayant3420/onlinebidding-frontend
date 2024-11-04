import { useContext } from "react";
import SignUpSuccessBanner from "../../../assets/images/SignUpSuccessBanner.png";
import Button from "../../../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../../context/SignUpContext";

function SignUpSuccess() {
  const navigate = useNavigate();
  const setIsSignupSuccess = useContext(SignUpContext)?.setIsSignupSuccess;

  return (
    <div className="sign-up-success-container m-auto">
      <div className="uncover-deal m-auto">
        Uncover Deals, Unleash Excitement:
        <span className="dive-into">Dive into Our Auctions Today!</span>
      </div>
      <div className="signup-banner">
        <img src={SignUpSuccessBanner} alt="signup banner" />
      </div>
      <div className="login-now">
        <Button
          label="Login Now"
          className="m-auto"
          onClick={() => {
            setIsSignupSuccess && setIsSignupSuccess(false);
            navigate("/auth/login")
          }}
        />
      </div>
    </div>
  );
}

export default SignUpSuccess;
