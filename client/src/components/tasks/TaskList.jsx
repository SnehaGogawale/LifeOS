import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks, refresh }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-tasks">
        <h3>No Tasks Found</h3>
        <p>Create your first task 🚀</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default TaskList;