import Accordion from "./accordion";
import { useState } from "react";

function NoteList({ notes, onDelete, onCompleted, sortBy }) {
  const [open, setOpen] = useState(null);
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "comoleted")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <Accordion
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
          setOpen={setOpen}
          open={open}
        />
      ))}
    </div>
  );
}

export default NoteList;
