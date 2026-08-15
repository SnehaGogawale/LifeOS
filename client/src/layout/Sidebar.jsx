import "../styles/Sidebar.css";
import {
  FaHome,
  FaCheckSquare,
  FaFire,
  FaSmile,
  FaBook,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">LifeOS</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/tasks" className="nav-link">
              <FaCheckSquare />
              <span>Tasks</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/habits" className="nav-link">
              <FaFire />
              <span>Habits</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/mood" className="nav-link">
              <FaSmile />
              <span>Mood</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/journal" className="nav-link">
              <FaBook />
              <span>Journal</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics" className="nav-link">
              <FaChartBar />
              <span>Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className="nav-link">
              <FaCog />
              <span>Settings</span>
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;