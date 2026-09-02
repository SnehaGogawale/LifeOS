import { useState } from "react";
import { createHabit } from "../../services/habitService";
import "./AddHabitModal.css";
import toast from "react-hot-toast";

function AddHabitModal({ refresh }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter a habit name");
      return;
    }

    try {
      await createHabit({ name });

      toast.success("Habit added successfully!");

      setName("");
      setShowModal(false);

      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create habit"
      );
    }
  };

  return (
    <>
      <button
        className="add-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Habit
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Add New Habit</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="modal-buttons">
                <button type="submit">
                  Save
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowModal(false);
                    setName("");
                  }}
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

export default AddHabitModal;