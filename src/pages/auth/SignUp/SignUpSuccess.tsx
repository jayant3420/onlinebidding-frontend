import SignUpSuccessBanner from "../../../assets/images/SignUpSuccessBanner.png";
import Button from "../../../component/Button/Button";

function SignUpSuccess() {
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
        <Button label="Login Now" className="m-auto" />
      </div>
    </div>
  );
}

export default SignUpSuccess;
