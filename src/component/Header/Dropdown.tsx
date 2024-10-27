import Avatar from "../../assets/images/Avatar.png";

interface DropdownMenuProps {
  name?: string;
  email?: string;
  // dropdownRef: any;
  handleItemClick: () => void;
}

function DropDownMenu({
  name = "Olivia Rhye",
  email = "olivia@untitledui.com",
  handleItemClick
}: DropdownMenuProps) {


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
        <li onClick={handleItemClick}>View profile</li>
        <li onClick={handleItemClick}>Settings</li>
        <li onClick={handleItemClick}>My bids</li>
        <li onClick={handleItemClick}>Credit cards</li>
        <li onClick={handleItemClick}>My Auctions</li>
        <li onClick={handleItemClick}>Invite colleagues</li>
        <li onClick={handleItemClick}>Notifications</li>
        <li onClick={handleItemClick}>Community</li>
        <li onClick={handleItemClick}>Support</li>
        <li onClick={handleItemClick}>API</li>
        <li onClick={handleItemClick}>Log out</li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
