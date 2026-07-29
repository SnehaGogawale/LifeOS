import { useEffect, useState } from "react";
import "./Habits.css";

import { getHabits } from "../services/habitService";

import HabitList from "../components/habits/HabitList";
import AddHabitModal from "../components/habits/AddHabitModal";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHabits = async () => {
    try {
      const data = await getHabits();
      setHabits(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return <h2>Loading Habits...</h2>;
  }

  return (
    <div className="habits-page">
      <div className="habit-header">
        <h1>🔥 My Habits</h1>

        <AddHabitModal refresh={fetchHabits} />
      </div>

      <HabitList
        habits={habits}
        refresh={fetchHabits}
      />
    </div>
  );
}

export default Habits;