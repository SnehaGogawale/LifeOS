import {
  LayoutDashboard,
  CheckSquare,
  Repeat,
  Smile,
  BookOpen,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        LifeOS 🚀
      </h1>

      <nav className="space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/tasks"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
        >
          <CheckSquare size={20} />
          Tasks
        </Link>

        <Link
          to="/habits"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
        >
          <Repeat size={20} />
          Habits
        </Link>

        <Link
          to="/mood"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
        >
          <Smile size={20} />
          Mood
        </Link>

        <Link
          to="/journal"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100"
        >
          <BookOpen size={20} />
          Journal
        </Link>

        <button
          onClick={logout}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 w-full text-left text-red-600"
        >
          <LogOut size={20} />
          Logout
        </button>

      </nav>
    </aside>
  );
}

export default Sidebar;