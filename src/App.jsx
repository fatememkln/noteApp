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

  return (
    <div className="container">
      <h1 className="note-header">دفتر یادداشت</h1>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
