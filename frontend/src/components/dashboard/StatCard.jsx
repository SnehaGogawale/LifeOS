import "./StatCard.css";

function StatCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <div className="stat-card">
      <div
        className="stat-icon"
        style={{
          "--stat-color": color,
        }}
      >
        {icon}
      </div>

      <div className="stat-content">
        <span className="stat-title">
          {title}
        </span>

        <strong className="stat-value">
          {value}
        </strong>
      </div>
    </div>
  );
}

export default StatCard;