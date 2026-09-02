import api from "./api";

export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};
export const getWeeklyActivity = async () => {
  const response = await api.get("/dashboard/weekly");
  return response.data;
};