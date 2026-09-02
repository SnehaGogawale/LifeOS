import JournalCard from "./JournalCard";

function JournalList({ journals, refresh }) {
  if (journals.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Journal Entries</h2>
        <p>Start writing your first journal today ✨</p>
      </div>
    );
  }

  return (
    <div className="journal-grid">
      {journals.map((journal) => (
        <JournalCard
          key={journal._id}
          journal={journal}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default JournalList;