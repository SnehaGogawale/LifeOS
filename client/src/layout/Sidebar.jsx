import {
  FaHome,
  FaCheckSquare,
  FaFire,
  FaSmile,
  FaBook,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">LifeOS</h2>

      <nav>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaCheckSquare /> Tasks</li>
          <li><FaFire /> Habits</li>
          <li><FaSmile /> Mood</li>
          <li><FaBook /> Journal</li>
          <li><FaChartBar /> Analytics</li>
          <li><FaCog /> Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;