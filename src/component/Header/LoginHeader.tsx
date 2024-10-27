import VectorLogo from "../../assets/icons/vector.svg";

function LoginHeader() {
  return (
    <header className="login-header">
      <div className="logo">
        <img src={VectorLogo} alt="Genix Auctions Logo" />
      </div>
      <div className="site-name">
        <h1>
          Genix <span>Auctions</span>
        </h1>
      </div>
    </header>
  );
}

export default LoginHeader;
