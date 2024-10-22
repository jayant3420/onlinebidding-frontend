import VectorLogo from "../../assets/icons/vector.svg";
import DownArrow from "../../assets/icons/menuDropdown.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={VectorLogo} alt="Logo" />
          <span>Genix Auctions</span>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              Auctions{" "}
              <span className="arrow">
                <img src={DownArrow} alt="Logo" />
              </span>
            </li>
            <li className="nav-item">
              Bidding{" "}
              <span className="arrow">
                <img src={DownArrow} alt="Logo" />
              </span>
            </li>
            <li className="nav-item">
              About us{" "}
              <span className="arrow">
                <img src={DownArrow} alt="Logo" />
              </span>
            </li>
            <li className="nav-item">
              <span className="language-icon">
                <img src={LanguageIcon} alt="logo" />
              </span>
              <span>English</span>{" "}
              <span className="arrow">
                <img src={DownArrow} alt="Logo" />
              </span>
            </li>
            <li className="nav-item">
              <a href="#" className="login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button className="cta">Get Started</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
