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

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

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
        <div className="loading-state">
          Loading your dashboard...
        </div>
      </DashboardLayout>
    );
  }

  if (!dashboardData) {
    return (
      <DashboardLayout>
        <div className="loading-state">
          Unable to load dashboard data.
        </div>
      </DashboardLayout>
    );
  }

  const firstName =
    user?.name?.split(" ")[0] || "there";

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
      value: `${dashboardData.habits.longestStreak} days`,
      color: "#F97316",
      icon: <FaFire />,
    },
    {
      title: "Today's Mood",
      value: dashboardData.mood.today ?? "Not set",
      color: "#EC4899",
      icon: <FaSmile />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1>
            Good to see you, {firstName} 👋
          </h1>

          <p>
            Here's a quick look at your day.
          </p>
        </div>
      </div>

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