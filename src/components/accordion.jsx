import { TrashIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useDispatchNotes } from "../context/NotesContext";

function Accordion({ note, setOpen, open }) {
  const dispatch = useDispatchNotes();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const isOpen = note.id === open;
  return (
    <div
      className={`note-item ${note.completed ? "completed" : ""} ${
        isOpen ? "accordion__expanded " : ""
      }`}
    >
      <div
        className="note-item__header"
        onClick={() => setOpen(note.id === open ? null : note.id)}
      >
        <p className="title">{note.title}</p>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="note-item__content">
        <div className="note-item__desc">
          <p className="desc">{note.description}</p>
          <div className="actions">
            <button>
              <TrashIcon
                className="trash"
                onClick={() => dispatch({ type: "delete", payload: note.id })}
              />
            </button>
            <input
              type="checkbox"
              name="note.id"
              id="note.id"
              value={note.id}
              checked={note.completed}
              onChange={(e) => {
                const noteId = Number(e.target.value);
                dispatch({ type: "completed", payload: noteId });
              }}
            />
          </div>
        </div>
        <div className="note-item__footer">
          {new Date(note.createdAt).toLocaleDateString("en-Us", options)}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
