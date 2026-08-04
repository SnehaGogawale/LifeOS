import { useEffect, useState } from "react";
import MoodSelector from "../components/mood/MoodSelector";
import MoodList from "../components/mood/MoodList";
import { getMoods } from "../services/moodService";
import "../components/mood/Mood.css";

function Mood() {
  const [moods, setMoods] = useState([]);

  const fetchMoods = async () => {
    try {
      const data = await getMoods();
      setMoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1>😊 Mood Tracker</h1>
      </div>

      <MoodSelector refresh={fetchMoods} />

      <MoodList
        moods={moods}
        refresh={fetchMoods}
      />
    </div>
  );
}

export default Mood;