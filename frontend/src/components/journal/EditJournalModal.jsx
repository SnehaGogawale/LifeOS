import { useState } from "react";
import toast from "react-hot-toast";
import { updateJournal } from "../../services/journalService";

function EditJournalModal({ journal, refresh }) {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(journal.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      toast.error("Journal cannot be empty");
      return;
    }

    try {
      await updateJournal(journal._id, content);

      toast.success("Journal updated successfully");

      setShowModal(false);
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update journal"
      );
    }
  };

  return (
    <>
      <button
        className="edit-btn"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Journal</h2>

            <form onSubmit={handleSubmit}>
              <textarea
                rows="8"
                value={content}
                onChange={(e) =>
                  setContent(e.target.value)
                }
              />

              <div className="modal-buttons">
                <button type="submit">
                  Update
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditJournalModal;