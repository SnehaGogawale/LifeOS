import "./TaskWidget.css";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function TaskWidget() {

  const tasks = [
    {
      id: 1,
      title: "Complete React Dashboard",
      completed: false,
    },
    {
      id: 2,
      title: "Workout - 30 Minutes",
      completed: true,
    },
    {
      id: 3,
      title: "Read 10 Pages",
      completed: false,
    },
    {
      id: 4,
      title: "Drink 2L Water",
      completed: true,
    },
  ];

  return (
    <div className="task-widget">

      <div className="widget-header">
        <h3>Today's Tasks</h3>
        <button>View All</button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="task-item">

          {task.completed ? (
            <FaCheckCircle className="completed" />
          ) : (
            <FaRegCircle className="pending" />
          )}

          <span>{task.title}</span>

        </div>
      ))}

    </div>
  );
}

export default TaskWidget;