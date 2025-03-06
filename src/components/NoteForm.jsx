import React, { useState } from "react";
import api from "../utils/api";
import "../styles/noteForm.css"; // Import CSS untuk styling

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Title and body are required!");
    await api.createNote(title, body);
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
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
