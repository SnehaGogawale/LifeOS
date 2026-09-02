import { useState } from "react";
import toast from "react-hot-toast";
import { createMood } from "../../services/moodService";

function MoodSelector({ refresh }) {
  const [selectedMood, setSelectedMood] =
    useState(5);

  const saveMood = async () => {
    try {
      await createMood(selectedMood);
      toast.success("Mood saved!");
      refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to save mood"
      );
    }
  };

  return (
    <div className="mood-selector">
      <h3>How are you feeling today?</h3>

      <input
        type="range"
        min="1"
        max="10"
        value={selectedMood}
        onChange={(e) =>
          setSelectedMood(Number(e.target.value))
        }
      />

      <h2>{selectedMood}/10</h2>

      <button onClick={saveMood}>
        Save Mood
      </button>
    </div>
  );
}

export default MoodSelector;