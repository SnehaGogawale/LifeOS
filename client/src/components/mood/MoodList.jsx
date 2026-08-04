import MoodCard from "./MoodCard";

function MoodList({ moods, refresh }) {
  if (moods.length === 0) {
    return (
      <div className="empty-state">
        <h3>No moods recorded yet.</h3>
      </div>
    );
  }

  return (
    <div className="mood-grid">
      {moods.map((mood) => (
        <MoodCard
          key={mood._id}
          mood={mood}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default MoodList;