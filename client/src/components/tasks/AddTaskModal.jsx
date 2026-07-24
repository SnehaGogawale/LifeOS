import { useState } from "react";
import "./AddTaskModal.css";
import toast from "react-hot-toast";

import { createTask } from "../../services/taskService";

function AddTaskModal({ refresh }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter task title");
      return;
    }

    try {
      await createTask({
        title,
        priority,
      });

      toast.success("Task added successfully");

      setTitle("");
      setPriority("medium");
      setShow(false);

      refresh();
    } catch (error) {
      toast.error("Failed to add task");
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        + Add Task
      </button>

      {show && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>New Task</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Task title"
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
                  Save
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

export default AddTaskModal;