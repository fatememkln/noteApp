import { TrashIcon } from "@heroicons/react/24/solid";

function noteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default noteList;

function NoteItem({ note, onDelete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button>
            <TrashIcon className="trash" onClick={() => onDelete(note.id)} />
          </button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-Us", options)}
      </div>
    </div>
  );
}
