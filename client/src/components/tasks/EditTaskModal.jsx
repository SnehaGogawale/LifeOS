import { useState } from "react";
import "./EditTaskModal.css";
import toast from "react-hot-toast";

import { updateTask } from "../../services/taskService";

function EditTaskModal({ task, refresh }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateTask(task._id, {
        title,
        priority,
      });

      toast.success("Task updated");

      refresh();
      setShow(false);

    } catch (error) {
      toast.error("Update failed");
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="edit-btn"
        onClick={() => setShow(true)}
      >
        ✏️
      </button>

      {show && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Edit Task</h2>

            <form onSubmit={handleUpdate}>

              <input
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              <div className="modal-buttons">

                <button type="submit">
                  Update
                </button>

                <button
                  type="button"
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

export default EditTaskModal;