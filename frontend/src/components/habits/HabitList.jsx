import HabitCard from "./HabitCard";

function HabitList({ habits, refresh }) {
  if (habits.length === 0) {
    return <h2>No Habits Found</h2>;
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard
          key={habit._id}
          habit={habit}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default HabitList;