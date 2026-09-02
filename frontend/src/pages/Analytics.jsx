import WeeklyChart from "../components/analytics/WeeklyChart";
import MoodChart from "../components/analytics/MoodChart";
import HabitChart from "../components/analytics/HabitChart";
import ProductivityCard from "../components/analytics/ProductivityCard";
import "../components/analytics/Analytics.css";

function Analytics() {
  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>📊 Analytics</h1>

        <p>
          Understand your productivity, habits and mood.
        </p>
      </div>

      <ProductivityCard />

      <div className="analytics-grid">

        <div className="analytics-card">
          <WeeklyChart />
        </div>

        <div className="analytics-card">
          <MoodChart />
        </div>

      </div>

      <div className="analytics-card habit-chart-card">
        <HabitChart />
      </div>

    </div>
  );
}

export default Analytics;