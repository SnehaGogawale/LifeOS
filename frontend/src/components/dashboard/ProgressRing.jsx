import "./ProgressRing.css";

function ProgressRing() {
  const progress = 75;

  return (
    <div className="progress-widget">
      <h3>Daily Progress</h3>

      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(#6366F1 ${progress * 3.6}deg, #e5e7eb 0deg)`,
        }}
      >
        <div className="progress-inner">
          <h2>{progress}%</h2>
        </div>
      </div>

      <p>Keep Going! 🚀</p>
    </div>
  );
}

export default ProgressRing;