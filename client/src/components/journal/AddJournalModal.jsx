import { useState } from "react";
import toast from "react-hot-toast";
import { createJournal } from "../../services/journalService";

function AddJournalModal({ refresh }) {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      toast.error("Journal cannot be empty");
      return;
    }

    try {
      await createJournal(content);

      toast.success("Journal added successfully");

      setContent("");
      setShowModal(false);

      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to add journal"
      );
    }
  };

  return (
    <>
      <button
        className="add-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Journal
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>New Journal Entry</h2>

            <form onSubmit={handleSubmit}>

              <textarea
                rows="8"
                placeholder="Write about your day..."
                value={content}
                onChange={(e) =>
                  setContent(e.target.value)
                }
              />

              <div className="modal-buttons">
                <button type="submit">
                  Save
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

export default AddJournalModal;