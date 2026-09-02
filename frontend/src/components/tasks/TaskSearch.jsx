import "./TaskSearch.css";

function TaskSearch({ search, setSearch }) {
  return (
    <input
      className="task-search"
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default TaskSearch;