import { useEffect, useState } from "react";
import { getTasks } from "../../services/taskService";

function ProductivityCard() {
  const [score, setScore] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductivity();
  }, []);

  const fetchProductivity = async () => {
    try {
      const tasks = await getTasks();

      console.log("Tasks for productivity:", tasks);

      const total = tasks.length;

      const completed = tasks.filter(
        (task) => task.completed === true
      ).length;

      const productivity =
        total === 0
          ? 0
          : Math.round((completed / total) * 100);

      setTotalTasks(total);
      setCompletedTasks(completed);
      setScore(productivity);
    } catch (error) {
      console.log(
        "Productivity Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="productivity-card">
        <p>Calculating productivity...</p>
      </div>
    );
  }

  return (
    <div className="productivity-card">

      <div className="productivity-info">
        <h2>🎯 Productivity Score</h2>

        <p>
          Keep going! Here's how you're doing with your
          tasks.
        </p>
      </div>

      <div className="productivity-score">
        <span>{score}%</span>
        <small>Productivity</small>
      </div>

      <div className="productivity-stats">

        <div>
          <strong>{totalTasks}</strong>
          <span>Total Tasks</span>
        </div>

        <div>
          <strong>{completedTasks}</strong>
          <span>Completed</span>
        </div>

        <div>
          <strong>
            {totalTasks - completedTasks}
          </strong>
          <span>Remaining</span>
        </div>

      </div>

    </div>
  );
}

export default ProductivityCard;