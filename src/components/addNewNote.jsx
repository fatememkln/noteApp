import { useState } from "react";
import { useDispatchNotes } from "../context/NotesContext";
function AddNewNote() {
  const dispatch = useDispatchNotes();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>یادداشت جدید</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="عنوان"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="توضیحات "
        />
        <button type="submit" className="btn btn--primary">
          اضافه کردن یادداشت جدید
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
