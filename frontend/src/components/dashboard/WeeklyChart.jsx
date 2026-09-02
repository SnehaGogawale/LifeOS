import { useEffect, useState } from "react";
import "./WeeklyChart.css";
import { getWeeklyActivity } from "../../services/dashboardService";

function WeeklyChart() {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    fetchWeekly();
  }, []);

  const fetchWeekly = async () => {
    try {
      const data = await getWeeklyActivity();
      setWeeklyData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chart-widget">
      <h3>Weekly Activity</h3>

      <div className="chart-container">
        {weeklyData.map((item) => (
          <div className="bar-group" key={item.day}>
            <div
              className="bar"
              style={{
                height: `${Math.max(item.value * 30, 20)}px`,
              }}
            ></div>

            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyChart;