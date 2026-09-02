import "./StatCard.css";

function StatCard({ icon, title, value, color }) {
  return (
    <div className="stat-card">
      <div
        className="stat-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatCard;