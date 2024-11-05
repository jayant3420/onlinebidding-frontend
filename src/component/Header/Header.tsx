import { useState, useRef, useEffect, useContext } from "react";
import VectorLogo from "../../assets/icons/vector.svg";
import DownArrow from "../../assets/icons/menuDropdown.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";
import Avatar from "../../assets/images/Avatar.png";
import DropDownMenu from "./Dropdown";
import { getter, clearStorage } from "../../util/storage";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<any>(null);
  const authContext = useContext(AuthContext);
  const user = authContext?.user ?? null;
  const setUserDetail = authContext?.setUserDetail ?? null;

  const navigate = useNavigate();

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

  const handleItemClick = (actionItem: string) => {
    switch (actionItem) {
      case "VIEW_PROFILE":
        console.log("Navigating to profile page...");
        // Add logic to navigate to profile page
        break;
      case "SETTINGS":
        console.log("Opening settings...");
        // Add logic to open settings
        break;
      case "MY_BIDS":
        console.log("Showing user's bids...");
        // Add logic to display user's bids
        break;
      case "CREDIT_CARDS":
        console.log("Managing credit cards...");
        // Add logic to manage credit cards
        break;
      case "MY_AUCTIONS":
        console.log("Viewing my auctions...");
        // Add logic to view auctions
        break;
      case "INVITE_COLLEAGUES":
        console.log("Inviting colleagues...");
        // Add logic to invite colleagues
        break;
      case "NOTIFICATIONS":
        console.log("Viewing notifications...");
        // Add logic to show notifications
        break;
      case "COMMUNITY":
        console.log("Opening community page...");
        // Add logic to open community page
        break;
      case "SUPPORT":
        console.log("Accessing support...");
        // Add logic to access support
        break;
      case "API":
        console.log("Navigating to API documentation...");
        // Add logic to view API documentation
        break;
      case "LOG_OUT":
        console.log("Logging out...");
        clearStorage();
        setUserDetail && setUserDetail(null);
        navigate("/");
        break;
      default:
        console.log("Unknown action");
    }
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
            {user ? (
              <li
                className="nav-item"
                onClick={handleToggleClick}
                ref={dropdownRef}
              >
                <img src={Avatar} alt="logged in user avatar" />
                {isOpen && (
                  <DropDownMenu
                    name={`${user.firstName} ${user.lastName}`}
                    email={user.email}
                    handleItemClick={handleItemClick}
                  />
                )}
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/auth/login" className="login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="cta"
                    onClick={() => navigate("/auth/sign-up")}
                  >
                    Get Started
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
