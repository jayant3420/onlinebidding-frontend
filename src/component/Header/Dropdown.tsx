import Avatar from "../../assets/images/Avatar.png";

interface DropdownMenuProps {
  name?: string;
  email?: string;
  // dropdownRef: any;
  handleItemClick: (actionItem: string) => void;
}

function DropDownMenu({ name, email, handleItemClick }: DropdownMenuProps) {
  return (
    <div className="dropdown">
      <div className="user-info">
        <img src={Avatar} alt="Profile" className="user-image" />
        <div>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <ul className="dropdown-menu">
        <li onClick={() => handleItemClick("VIEW_PROFILE")}>View profile</li>
        <li onClick={() => handleItemClick("SETTINGS")}>Settings</li>
        <li onClick={() => handleItemClick("MY_BIDS")}>My bids</li>
        <li onClick={() => handleItemClick("CREDIT_CARDS")}>Credit cards</li>
        <li onClick={() => handleItemClick("MY_AUCTIONS")}>My Auctions</li>
        <li onClick={() => handleItemClick("INVITE_COLLEAGUES")}>
          Invite colleagues
        </li>
        <li onClick={() => handleItemClick("NOTIFICATIONS")}>Notifications</li>
        <li onClick={() => handleItemClick("COMMUNITY")}>Community</li>
        <li onClick={() => handleItemClick("SUPPORT")}>Support</li>
        <li onClick={() => handleItemClick("API")}>API</li>
        <li onClick={() => handleItemClick("LOG_OUT")}>Log out</li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
