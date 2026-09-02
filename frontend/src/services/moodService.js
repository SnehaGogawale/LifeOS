import api from "./api";

// Get all moods
export const getMoods = async () => {
  const response = await api.get("/moods");
  return response.data;
};

// Create mood
export const createMood = async (mood) => {
  const response = await api.post("/moods", {
    mood,
  });

  return response.data;
};

// Delete mood
export const deleteMood = async (id) => {
  const response = await api.delete(`/moods/${id}`);
  return response.data;
};