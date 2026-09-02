import api from "./api";

// Get all tasks
export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

// Create task
export const createTask = async (task) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

// Update task
export const updateTask = async (id, data) => {
  const response = await api.put(`/tasks/${id}`, data);
  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};