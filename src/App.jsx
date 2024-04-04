import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote";
import NoteList from "./components/noteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <h1 className="note-header">دفتر یادداشت</h1>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
