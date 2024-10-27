import LoginBannerImage from "../../../assets/images/LoginBanner.png";

function LoginBanner() {
  return (
    <div className="login-banner-container m-auto">
      <img src={LoginBannerImage} alt="Login page banner" />
    </div>
  );
}

export default LoginBanner;
