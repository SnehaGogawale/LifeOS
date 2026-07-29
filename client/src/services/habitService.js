import api from "./api";

// Get all habits
export const getHabits = async () => {
  const response = await api.get("/habits");
  return response.data;
};

// Create habit
export const createHabit = async (habit) => {
  const response = await api.post("/habits", habit);
  return response.data;
};

// Update habit
export const updateHabit = async (id, habit) => {
  const response = await api.put(`/habits/${id}`, habit);
  return response.data;
};

// Complete habit
export const completeHabit = async (id) => {
  const response = await api.put(`/habits/${id}/complete`);
  return response.data;
};

// Delete habit
export const deleteHabit = async (id) => {
  const response = await api.delete(`/habits/${id}`);
  return response.data;
};