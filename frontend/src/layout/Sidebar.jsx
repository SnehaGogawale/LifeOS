import { useState } from "react";
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
  FiChevronLeft,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import "../styles/Sidebar.css";

function Sidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    { label: "Dashboard", path: "/dashboard", icon: FiHome },
    { label: "Tasks", path: "/tasks", icon: FiCheckSquare },
    { label: "Habits", path: "/habits", icon: FiTarget },
    { label: "Mood", path: "/mood", icon: FiSmile },
    { label: "Journal", path: "/journal", icon: FiBookOpen },
    { label: "Analytics", path: "/analytics", icon: FiBarChart2 },
  ];

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const getInitial = () => user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <aside className={`sidebar ${collapsed ? "sidebar-collapsed" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <div className="brand-mark" aria-hidden="true">
            <span>L</span>
          </div>

          <div className="brand-text">
            <h2>LifeOS</h2>
            <span>Your life, organized.</span>
          </div>
        </div>

        <button
          type="button"
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed((value) => !value)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <FiChevronLeft />
        </button>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-section-title">Workspace</p>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={collapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <span className="sidebar-icon-wrap">
                  <Icon className="sidebar-link-icon" />
                </span>
                <span className="sidebar-link-label">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <NavLink
          to="/settings"
          title={collapsed ? "Settings" : undefined}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon-wrap">
            <FiSettings className="sidebar-link-icon" />
          </span>
          <span className="sidebar-link-label">Settings</span>
        </NavLink>

        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
        >
          <span className="sidebar-icon-wrap">
            <FiLogOut className="sidebar-link-icon" />
          </span>
          <span className="sidebar-link-label">Logout</span>
        </button>

        <div className="sidebar-user">
          <div className="sidebar-user-avatar">{getInitial()}</div>

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
