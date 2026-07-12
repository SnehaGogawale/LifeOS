import api from "./api";

export const getMoods = async () => {
  const response = await api.get("/moods");
  return response.data;
};

export const createMood = async (mood) => {
  const response = await api.post("/moods", {
    mood,
  });

  return response.data;
};