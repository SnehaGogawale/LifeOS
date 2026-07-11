import "./JournalCard.css";

function JournalCard() {
  const journal = {
    title: "Today's Journal",
    preview:
      "Today was a productive day. I completed my dashboard layout, learned reusable React components, and made good progress on LifeOS.",
  };

  return (
    <div className="journal-widget">
      <h3>{journal.title}</h3>

      <p>{journal.preview}</p>

      <button>Read More →</button>
    </div>
  );
}

export default JournalCard;