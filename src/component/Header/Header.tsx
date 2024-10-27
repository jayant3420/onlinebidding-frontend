import { useState, useRef, useEffect } from "react";
import VectorLogo from "../../assets/icons/vector.svg";
import DownArrow from "../../assets/icons/menuDropdown.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";
import Avatar from "../../assets/images/Avatar.png";
import DropDownMenu from "./Dropdown";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  const handleToggleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

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
            {/* <li className="nav-item">
              <a href="#" className="login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button className="cta">Get Started</button>
            </li> */}
            <li
              className="nav-item"
              onClick={handleToggleClick}
              ref={dropdownRef}
            >
              <img src={Avatar} alt="logged in user avatar" />
            </li>
          </ul>
        </nav>

        {isOpen && <DropDownMenu handleItemClick={handleItemClick} />}
      </div>
    </header>
  );
}

export default Header;
