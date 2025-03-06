import React, { useEffect, useState } from "react";
import api from "../utils/api";
import NoteItem from "./NoteItem";
import Search from "./search";
import "../styles/notes.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const data = await api.getNotes();
    setNotes(data.data);
    setFilteredNotes(data.data);
    setLoading(false);
  };

  const handleSearch = (query) => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const handleArchive = async (id) => {
    await api.archiveNote(id);
    fetchNotes();
  };

  const handleUnarchive = async (id) => {
    await api.unarchiveNote(id);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await api.deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="note-list-container">
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="note-list">
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onArchive={handleArchive}
              onUnarchive={handleUnarchive}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
