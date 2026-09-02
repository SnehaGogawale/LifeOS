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

import { getHabits } from "../../services/habitService";

function HabitChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const habits = await getHabits();

      console.log("Habit API:", habits);

      const formattedData = habits.map((habit) => ({
        name: habit.name,
        streak: habit.streak || 0,
      }));

      setData(formattedData);
    } catch (error) {
      console.log(
        "Habit API Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading habit data...</p>;
  }

  return (
    <div>
      <h2>🔥 Habit Streaks</h2>

      <p className="chart-subtitle">
        Your current streak for each habit
      </p>

      {data.length === 0 ? (
        <p>No habits available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              angle={-20}
              textAnchor="end"
              interval={0}
            />

            <YAxis
              allowDecimals={false}
              label={{
                value: "Days",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip
              formatter={(value) => [
                `${value} days`,
                "Streak",
              ]}
            />

            <Bar
              dataKey="streak"
              name="Current Streak"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default HabitChart;