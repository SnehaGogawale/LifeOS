import "./TaskItem.css";

import {
  FaTrash,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

import toast from "react-hot-toast";

import {
  updateTask,
  deleteTask,
} from "../../services/taskService";

import EditTaskModal from "./EditTaskModal";

function TaskItem({ task, refresh }) {

  const toggleTask = async () => {

    try {

      await updateTask(task._id, {
        completed: !task.completed,
      });

      toast.success(
        task.completed
          ? "Task marked as pending"
          : "Task completed"
      );

      refresh();

    } catch (error) {
      toast.error("Something went wrong");
    }

  };

  const removeTask = async () => {

    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await deleteTask(task._id);

      toast.success("Task deleted");

      refresh();

    } catch (error) {
      toast.error("Delete failed");
    }

  };

  return (
    <div className="task-card">

      <div className="left">

        <div
          className="check-btn"
          onClick={toggleTask}
        >
          {task.completed ? (
            <FaCheckCircle className="done" />
          ) : (
            <FaRegCircle />
          )}
        </div>

        <div className="task-info">

          <h3
            className={
              task.completed
                ? "completed"
                : ""
            }
          >
            {task.title}
          </h3>

          <span
            className={`priority ${task.priority}`}
          >
            {task.priority}
          </span>

        </div>

      </div>

      <div className="actions">

        <EditTaskModal
          task={task}
          refresh={refresh}
        />

        <FaTrash
          className="delete"
          onClick={removeTask}
        />

      </div>

    </div>
  );
}

export default TaskItem;