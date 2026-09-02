import { useEffect, useState } from "react";
import "./MoodWidget.css";

import {
  getMoods,
  createMood,
} from "../../services/moodService";

function MoodWidget() {
  const moodOptions = [
    { emoji: "😢", value: 2 },
    { emoji: "😐", value: 4 },
    { emoji: "🙂", value: 6 },
    { emoji: "😊", value: 8 },
    { emoji: "😁", value: 10 },
  ];

  const [todayMood, setTodayMood] = useState(null);

  useEffect(() => {
    fetchMood();
  }, []);

  const fetchMood = async () => {
    try {
      const moods = await getMoods();

      if (moods.length > 0) {
        setTodayMood(moods[0].mood);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveMood = async (value) => {
    try {
      await createMood(value);
      setTodayMood(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mood-widget">
      <h3>Today's Mood</h3>

      <div className="current-mood">
        {todayMood ?? "Not Selected"}
      </div>

      <p>How are you feeling today?</p>

      <div className="mood-list">
        {moodOptions.map((mood) => (
          <button
            key={mood.value}
            onClick={() => saveMood(mood.value)}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodWidget;