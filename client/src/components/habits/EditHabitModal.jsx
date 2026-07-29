import { useState } from "react";
import { updateHabit } from "../../services/habitService";
import toast from "react-hot-toast";

function EditHabitModal({ habit, refresh }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(habit.name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Habit name is required");
      return;
    }

    try {
      await updateHabit(habit._id, { name });

      toast.success("Habit updated successfully");

      setShow(false);
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to update habit"
      );
    }
  };

  return (
    <>
      <button
        className="edit-btn"
        onClick={() => setShow(true)}
      >
        Edit
      </button>

      {show && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Habit</h2>

            <form onSubmit={handleSubmit}>
              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <div className="modal-buttons">
                <button type="submit">
                  Update
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShow(false)}
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

export default EditHabitModal;