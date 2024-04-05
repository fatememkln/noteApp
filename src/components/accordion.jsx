import { TrashIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Accordion({ note, onDelete, onCompleted, setOpen, open }) {
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
              <TrashIcon className="trash" onClick={() => onDelete(note.id)} />
            </button>
            <input
              type="checkbox"
              name="note.id"
              id="note.id"
              value={note.id}
              checked={note.completed}
              onChange={onCompleted}
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
