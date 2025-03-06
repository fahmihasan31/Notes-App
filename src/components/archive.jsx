import React, { useEffect, useState } from "react";
import api from "../utils/api";
import NoteItem from "./NoteItem";
import "../styles/notes.css";

const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArchivedNotes();
  }, []);

  const fetchArchivedNotes = async () => {
    setLoading(true);
    const data = await api.getArchivedNotes();
    setArchivedNotes(data.data);
    setLoading(false);
  };

  const handleUnarchive = async (id) => {
    await api.unarchiveNote(id);
    fetchArchivedNotes();
  };

  const handleDelete = async (id) => {
    await api.deleteNote(id);
    fetchArchivedNotes();
  };

  return (
    <div className="archive-container">
      <h2 className="archive-title">Archived Notes</h2>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="note-list">
          {archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onUnarchive={handleUnarchive}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
