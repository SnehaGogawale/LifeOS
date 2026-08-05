import { useEffect, useState } from "react";
import {
  getJournals,
} from "../services/journalService";

import JournalList from "../components/journal/JournalList";
import AddJournalModal from "../components/journal/AddJournalModal";
import "../components/journal/Journal.css";
function Journal() {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const data = await getJournals();
      setJournals(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>📖 My Journal</h1>

        <AddJournalModal
          refresh={fetchJournals}
        />
      </div>

      <JournalList
        journals={journals}
        refresh={fetchJournals}
      />
    </div>
  );
}

export default Journal;