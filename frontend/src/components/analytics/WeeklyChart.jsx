import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import api from "../../services/api";

function WeeklyChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeeklyData();
  }, []);

  const fetchWeeklyData = async () => {
    try {
      const response = await api.get("/dashboard/weekly");

      console.log("Weekly API:", response.data);

      setData(response.data);
    } catch (error) {
      console.log(
        "Weekly API Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading weekly activity...</p>;
  }

  return (
    <div>
      <h2>📈 Weekly Activity</h2>

      <p className="chart-subtitle">
        Your task activity over the last 7 days
      </p>

      {data.length === 0 ? (
        <p>No weekly activity available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="completed"
              name="Completed Tasks"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default WeeklyChart;