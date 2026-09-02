import toast from "react-hot-toast";
import { deleteMood } from "../../services/moodService";

function MoodCard({ mood, refresh }) {
  const getEmoji = (value) => {
    if (value >= 9) return "😁";
    if (value >= 7) return "😊";
    if (value >= 5) return "😐";
    if (value >= 3) return "😔";
    return "😢";
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this mood?")) return;

    try {
      await deleteMood(mood._id);
      toast.success("Mood deleted");
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed"
      );
    }
  };

  return (
    <div className="mood-card">
      <h1>{getEmoji(mood.mood)}</h1>

      <h3>Rating : {mood.mood}/10</h3>

      <p>
        {new Date(
          mood.createdAt
        ).toLocaleDateString()}
      </p>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MoodCard;