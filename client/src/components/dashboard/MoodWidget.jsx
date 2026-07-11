import "./MoodWidget.css";

function MoodWidget() {
  const moods = ["😀", "😄", "🙂", "😐", "😢"];

  return (
    <div className="mood-widget">
      <h3>Today's Mood</h3>

      <div className="current-mood">
        😄 Happy
      </div>

      <p>How are you feeling today?</p>

      <div className="mood-list">
        {moods.map((mood, index) => (
          <button key={index}>{mood}</button>
        ))}
      </div>
    </div>
  );
}

export default MoodWidget;