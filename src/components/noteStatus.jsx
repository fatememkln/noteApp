import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>یادداشتی اضافه نشده است!</h2>;

  return (
    <ul className="note-status">
      <li>
        همه یادداشت ها <span>{allNotes}</span>
      </li>
      <li>
        یادداشت های کامل شده <span>{completedNotes}</span>
      </li>
      <li>
        یادداشت های باز <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
