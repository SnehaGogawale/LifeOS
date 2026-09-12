import "./ProgressRing.css";

function ProgressRing({ progress = 0 }) {
  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  return (
    <div className="progress-widget">
      <div className="progress-widget-header">
        <div>
          <span className="progress-eyebrow">
            TODAY
          </span>

          <h3>Daily Progress</h3>
        </div>
      </div>

      <div className="progress-circle-wrapper">
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              #6366f1 ${safeProgress * 3.6}deg,
              #eceef5 0deg
            )`,
          }}
        >
          <div className="progress-inner">
            <strong>{Math.round(safeProgress)}%</strong>
            <span>complete</span>
          </div>
        </div>
      </div>

      <p className="progress-message">
        {safeProgress >= 80
          ? "Amazing work today! ✨"
          : safeProgress >= 50
            ? "You're making great progress."
            : "Every small step counts."}
      </p>
    </div>
  );
}

export default ProgressRing;