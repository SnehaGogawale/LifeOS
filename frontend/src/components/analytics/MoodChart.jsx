import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getMoods } from "../../services/moodService";

function MoodChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoods();
  }, []);

  const fetchMoods = async () => {
    try {
      const moods = await getMoods();

      console.log("Mood API:", moods);

      const formattedData = moods
        .slice(0, 7)
        .reverse()
        .map((item) => ({
          date: new Date(item.createdAt).toLocaleDateString(
            "en-US",
            {
              weekday: "short",
            }
          ),

          mood: getMoodValue(item.mood),

          moodName: item.mood,
        }));

      setData(formattedData);
    } catch (error) {
      console.log(
        "Mood API Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Convert mood names into numbers for the chart
  const getMoodValue = (mood) => {
    const values = {
      terrible: 1,
      sad: 2,
      neutral: 3,
      happy: 4,
      excited: 5,

      // In case your backend uses capital letters
      Terrible: 1,
      Sad: 2,
      Neutral: 3,
      Happy: 4,
      Excited: 5,

      // Emoji support
      "😞": 1,
      "😔": 2,
      "😐": 3,
      "😊": 4,
      "🤩": 5,
    };

    return values[mood] || 3;
  };

  const getMoodLabel = (value) => {
    const labels = {
      1: "Terrible",
      2: "Sad",
      3: "Neutral",
      4: "Happy",
      5: "Excited",
    };

    return labels[value] || "Neutral";
  };

  if (loading) {
    return <p>Loading mood data...</p>;
  }

  return (
    <div>
      <h2>😊 Mood Trend</h2>

      <p className="chart-subtitle">
        Your mood over the last 7 entries
      </p>

      {data.length === 0 ? (
        <p>No mood data available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tickFormatter={getMoodLabel}
            />

            <Tooltip
              formatter={(value) => [
                getMoodLabel(value),
                "Mood",
              ]}
            />

            <Line
              type="monotone"
              dataKey="mood"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default MoodChart;