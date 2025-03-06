import React from "react";

const NoteItem = ({
  id,
  title,
  body,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="note-actions">
        {archived ? (
          <button onClick={() => onUnarchive(id)}>Unarchive</button>
        ) : (
          <button onClick={() => onArchive(id)}>Archive</button>
        )}
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
