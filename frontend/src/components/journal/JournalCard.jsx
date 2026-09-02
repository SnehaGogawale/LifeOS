import toast from "react-hot-toast";
import {
  deleteJournal,
} from "../../services/journalService";

import EditJournalModal from "./EditJournalModal";

function JournalCard({ journal, refresh }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this journal?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJournal(journal._id);

      toast.success("Journal deleted successfully");

      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete journal"
      );
    }
  };

  return (
    <div className="journal-card">

      <div className="journal-content">
        <p>{journal.content}</p>
      </div>

      <div className="journal-date">
        {new Date(
          journal.createdAt
        ).toLocaleString()}
      </div>

      <div className="journal-actions">

        <EditJournalModal
          journal={journal}
          refresh={refresh}
        />

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default JournalCard;