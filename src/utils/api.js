const BASE_URL = "https://notes-api.dicoding.dev/v2";

const api = {
  // Get all non-archived notes
  getNotes: async () => {
    const response = await fetch(`${BASE_URL}/notes`);
    return response.json();
  },

  // Get archived notes
  getArchivedNotes: async () => {
    const response = await fetch(`${BASE_URL}/notes/archived`);
    return response.json();
  },

  // Get a single note by ID
  getNoteById: async (id) => {
    const response = await fetch(`${BASE_URL}/notes/${id}`);
    return response.json();
  },

  // Create a new note
  createNote: async (title, body) => {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    return response.json();
  },

  // Archive a note
  archiveNote: async (id) => {
    const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
      method: "POST",
    });
    return response.json();
  },

  // Unarchive a note
  unarchiveNote: async (id) => {
    const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
      method: "POST",
    });
    return response.json();
  },

  // Delete a note
  deleteNote: async (id) => {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

export default api;
