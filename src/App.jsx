import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote";
import NoteList from "./components/noteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container">
      <h1 className="note-header">دفتر یادداشت</h1>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
