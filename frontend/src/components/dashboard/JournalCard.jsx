import { useEffect, useState } from "react";
import "./JournalCard.css";
import { getJournals } from "../../services/journalService";

function JournalCard() {
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournal();
  }, []);

  const fetchJournal = async () => {
    try {
      const data = await getJournals();

      if (data.length > 0) {
        setJournal(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="journal-widget">
        <h3>Loading Journal...</h3>
      </div>
    );
  }

  return (
    <div className="journal-widget">
      <h3>Today's Journal</h3>

      {journal ? (
        <>
          <p>
            {journal.content.length > 120
              ? journal.content.substring(0, 120) + "..."
              : journal.content}
          </p>

          <button>Read More →</button>
        </>
      ) : (
        <>
          <p>No journal entry yet.</p>
          <button>Write Journal</button>
        </>
      )}
    </div>
  );
}

export default JournalCard;