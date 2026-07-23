import api from "./api";

export const getJournals = async () => {
  const response = await api.get("/journals");
  return response.data;
};

export const createJournal = async (content) => {
  const response = await api.post("/journals", {
    content,
  });

  return response.data;
};

export const updateJournal = async (id, content) => {
  const response = await api.put(`/journals/${id}`, {
    content,
  });

  return response.data;
};

export const deleteJournal = async (id) => {
  const response = await api.delete(`/journals/${id}`);
  return response.data;
};