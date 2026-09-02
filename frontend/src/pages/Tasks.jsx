import "./Tasks.css";
import { useEffect, useState } from "react";

import DashboardLayout from "../layout/DashboardLayout";
import TaskList from "../components/tasks/TaskList";
import TaskSearch from "../components/tasks/TaskSearch";
import TaskFilters from "../components/tasks/taskFilters";
import AddTaskModal from "../components/tasks/AddTaskModal";

import { getTasks } from "../services/taskService";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed")
      return matchesSearch && task.completed;

    if (filter === "pending")
      return matchesSearch && !task.completed;

    return matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="tasks-page">

        <div className="page-header">
          <div>
            <h1>My Tasks</h1>
            <p>Manage your daily work efficiently.</p>
          </div>

          <AddTaskModal refresh={fetchTasks} />
        </div>

        <TaskSearch
          search={search}
          setSearch={setSearch}
        />

        <TaskFilters
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          refresh={fetchTasks}
        />

      </div>
    </DashboardLayout>
  );
}

export default Tasks;