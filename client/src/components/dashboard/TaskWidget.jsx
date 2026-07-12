import { useEffect, useState } from "react";
import "./TaskWidget.css";
import {
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

import {
  getTasks,
  updateTask,
} from "../../services/taskService";

function TaskWidget() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (task) => {
    try {
      const updated = await updateTask(task._id, {
        completed: !task.completed,
      });

      setTasks((prev) =>
        prev.map((t) =>
          t._id === updated._id ? updated : t
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="task-widget">
        <h3>Loading Tasks...</h3>
      </div>
    );
  }

  return (
    <div className="task-widget">
      <div className="widget-header">
        <h3>Today's Tasks</h3>
      </div>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="task-item"
          >
            <div
              onClick={() => toggleTask(task)}
              style={{ cursor: "pointer" }}
            >
              {task.completed ? (
                <FaCheckCircle className="completed" />
              ) : (
                <FaRegCircle className="pending" />
              )}
            </div>

            <div className="task-details">
              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {task.title}
              </span>

              <small> {task.priority}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskWidget;