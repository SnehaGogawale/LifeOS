import DashboardLayout from "../layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import TaskWidget from "../components/dashboard/TaskWidget";
import MoodWidget from "../components/dashboard/MoodWidget";
import ProgressRing from "../components/dashboard/ProgressRing";
import JournalCard from "../components/dashboard/JournalCard";
import WeeklyChart from "../components/dashboard/WeeklyChart";

import {
  FaClipboardList,
  FaCheckCircle,
  FaFire,
  FaSmile,
} from "react-icons/fa";

function Dashboard() {

  const stats = [
    {
      title: "Total Tasks",
      value: 18,
      color: "#6366F1",
      icon: <FaClipboardList />,
    },
    {
      title: "Completed",
      value: 12,
      color: "#22C55E",
      icon: <FaCheckCircle />,
    },
    {
      title: "Habit Streak",
      value: "7 Days",
      color: "#F97316",
      icon: <FaFire />,
    },
    {
      title: "Today's Mood",
      value: "Happy",
      color: "#EC4899",
      icon: <FaSmile />,
    },
  ];

  return (
    <DashboardLayout>
      <h1>Welcome Back 👋</h1>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
          
        ))}</div>
        <div className="dashboard-grid">

  <TaskWidget />

  <div className="right-column">
    <MoodWidget />
    <ProgressRing />
    <JournalCard />
    <WeeklyChart />
  </div>

</div>
    </DashboardLayout>
  );
}


export default Dashboard;