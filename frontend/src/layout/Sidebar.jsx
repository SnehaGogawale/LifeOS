import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCheckSquare,
  FiTarget,
  FiSmile,
  FiBookOpen,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import "../styles/Sidebar.css";

function Sidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const navigation = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: FiHome,
    },
    {
      label: "Tasks",
      path: "/tasks",
      icon: FiCheckSquare,
    },
    {
      label: "Habits",
      path: "/habits",
      icon: FiTarget,
    },
    {
      label: "Mood",
      path: "/mood",
      icon: FiSmile,
    },
    {
      label: "Journal",
      path: "/journal",
      icon: FiBookOpen,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: FiBarChart2,
    },
  ];

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  const getInitial = () => {
    return user?.name?.charAt(0)?.toUpperCase() || "U";
  };

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-mark">
          <span>L</span>
        </div>

        <div className="brand-text">
          <h2>LifeOS</h2>
          <span>Your life, organized.</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="sidebar-section">
        <p className="sidebar-section-title">Workspace</p>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon className="sidebar-link-icon" />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom navigation */}
      <div className="sidebar-bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <FiSettings className="sidebar-link-icon" />
          <span>Settings</span>
        </NavLink>

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <FiLogOut className="sidebar-link-icon" />
          <span>Logout</span>
        </button>

        {/* User */}
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            {getInitial()}
          </div>

          <div className="sidebar-user-info">
            <strong>{user?.name || "User"}</strong>
            <span>{user?.email || "LifeOS account"}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;