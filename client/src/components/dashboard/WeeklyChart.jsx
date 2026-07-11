import "./WeeklyChart.css";

function WeeklyChart() {
  const weeklyData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 200 },
  { day: "Fri", value: 140 },
  { day: "Sat", value: 160 },
  { day: "Sun", value: 70 },
];

  return (
    <div className="chart-widget">
      <h3>Weekly Activity</h3>

      <div className="chart-container">
        {weeklyData.map((item) => (
          <div className="bar-group" key={item.day}>
            <div
              className="bar"
              style={{ height: `${item.value}px` }}
            ></div>

            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyChart;