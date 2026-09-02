import { useState } from "react";
import {
  FaBell,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <header className="navbar">

      <h2>Good Afternoon 👋</h2>

      <div className="navbar-right">

        {/* Notification */}
        <FaBell className="icon" />

        {/* Profile */}
        <div className="profile-container">

          <FaUserCircle
            className="profile-icon"
            onClick={() => setShowMenu(!showMenu)}
          />

          {/* Profile Dropdown */}
          {showMenu && (
            <div className="profile-menu">

              <div className="profile-menu-header">
                <FaUserCircle />

                <div>
                  <strong>
                    {user?.name || "User"}
                  </strong>

                  <small>
                    {user?.email || ""}
                  </small>
                </div>
              </div>

              <div
                className="profile-menu-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >
                <FaUser />
                <span>My Profile</span>
              </div>

              <div
                className="profile-menu-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/settings");
                }}
              >
                <FaCog />
                <span>Settings</span>
              </div>

              <div
                className="profile-menu-item logout-item"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </div>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;