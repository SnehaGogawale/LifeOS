
import { useState } from "react";
import {
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";

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

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getInitial = () =>
    user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <header className="topbar">

      {/* Greeting */}
      <div className="topbar-left">
        <div>
          <h2 className="topbar-greeting">
            {getGreeting()} 👋
          </h2>

          <span className="topbar-subtitle">
            Make today a little better.
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="topbar-right">

        {/* Notification */}
        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
          title="Notifications"
        >
          <FiBell />
          <span className="notification-dot"></span>
        </button>

        {/* Profile */}
        <div className="profile-container">

          <button
            type="button"
            className="profile-trigger"
            onClick={() => setShowMenu((value) => !value)}
            aria-expanded={showMenu}
            aria-label="Open profile menu"
          >
            <span className="profile-avatar">
              {getInitial()}
            </span>

            <span className="profile-trigger-info">
              <strong>{user?.name || "User"}</strong>
              <span>My Account</span>
            </span>

            <FiChevronDown
              className={`profile-chevron ${
                showMenu ? "rotate-chevron" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {showMenu && (
            <div className="profile-menu">

              <div className="profile-menu-header">
                <div className="profile-menu-avatar">
                  {getInitial()}
                </div>

                <div>
                  <strong>{user?.name || "User"}</strong>
                  <span>{user?.email || ""}</span>
                </div>
              </div>

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >
                <FiUser />
                <span>My Profile</span>
              </button>

              <button
                type="button"
                className="profile-menu-item"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/settings");
                }}
              >
                <FiSettings />
                <span>Settings</span>
              </button>

              <button
                type="button"
                className="profile-menu-item logout-item"
                onClick={handleLogout}
              >
                <FiLogOut />
                <span>Logout</span>
              </button>

            </div>
          )}

        </div>
      </div>
    </header>
  );
}

export default Navbar;
