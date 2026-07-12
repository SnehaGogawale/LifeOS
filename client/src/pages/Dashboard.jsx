import { useEffect, useState } from "react";

import DashboardLayout from "../layout/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import TaskWidget from "../components/dashboard/TaskWidget";
import MoodWidget from "../components/dashboard/MoodWidget";
import ProgressRing from "../components/dashboard/ProgressRing";
import JournalCard from "../components/dashboard/JournalCard";
import WeeklyChart from "../components/dashboard/WeeklyChart";

import { getDashboard } from "../services/dashboardService";

import {
  FaClipboardList,
  FaCheckCircle,
  FaFire,
  FaSmile,
} from "react-icons/fa";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <h2>Loading Dashboard...</h2>
      </DashboardLayout>
    );
  }

  const stats = [
    {
      title: "Total Tasks",
      value: dashboardData.tasks.total,
      color: "#6366F1",
      icon: <FaClipboardList />,
    },
    {
      title: "Completed",
      value: dashboardData.tasks.completed,
      color: "#22C55E",
      icon: <FaCheckCircle />,
    },
    {
      title: "Habit Streak",
      value: `${dashboardData.habits.longestStreak} Days`,
      color: "#F97316",
      icon: <FaFire />,
    },
    {
      title: "Today's Mood",
      value: dashboardData.mood.today ?? "No Mood",
      color: "#EC4899",
      icon: <FaSmile />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Track your productivity and stay consistent every day.</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      {/* Widgets */}
      <div className="dashboard-grid">
        <TaskWidget />

        <div className="right-column">
          <MoodWidget />

          <ProgressRing
            progress={dashboardData.productivityScore}
          />

          <JournalCard />

          <WeeklyChart />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;