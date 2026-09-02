import "./HabitCard.css";
import {
  completeHabit,
  deleteHabit,
} from "../../services/habitService";
import EditHabitModal from "./EditHabitModal";
import toast from "react-hot-toast";

function HabitCard({ habit, refresh }) {
  const handleComplete = async () => {
    try {
      await completeHabit(habit._id);
      toast.success("Habit completed!");
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to complete habit"
      );
    }
  };

  const handleDelete = async () => {
    const ok = window.confirm(
      "Delete this habit?"
    );

    if (!ok) return;

    try {
      await deleteHabit(habit._id);
      toast.success("Habit deleted");
      refresh();
    } catch (error) {
      console.log(error.response);
console.log(error);

toast.error(
  error.response?.data?.message || error.message
);
    }
  };

  return (
    <div className="habit-card">
      <div>
        <h3>{habit.name}</h3>

        <p>
          🔥 Streak : {habit.streak}
        </p>
      </div>

      <div className="habit-actions">
        <button onClick={handleComplete}>
          Complete
        </button>

        <EditHabitModal
  habit={habit}
  refresh={refresh}
/>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitCard;