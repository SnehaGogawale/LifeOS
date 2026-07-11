import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <h2>Good Afternoon 👋</h2>

      <div className="navbar-right">
        <FaBell className="icon" />
        <FaUserCircle className="profile-icon" />
      </div>
    </header>
  );
}

export default Navbar;