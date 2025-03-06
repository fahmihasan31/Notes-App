import React, { useState } from "react";
import api from "../utils/api";
import LoadingIndicator from "./LoadingIndicator";
import "../styles/noteForm.css";

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Title and body are required!");

    setLoading(true);
    await api.createNote(title, body);
    setLoading(false);

    onNoteAdded();
    setTitle("");
    setBody("");
  };

  return (
    <div className="form-container">
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your note here..."
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Note"}
        </button>
      </form>
      {loading && <LoadingIndicator />}
    </div>
  );
};

export default NoteForm;
