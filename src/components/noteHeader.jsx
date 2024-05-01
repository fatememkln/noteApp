import { useNotes } from "../context/NotesContext";

function noteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header ">
      <h1>یادداشت های من ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">مرتب کردن بر اساس آخرین یادداشت ها</option>
        <option value="earliest">مرتب کردن بر اساس اولین یادداشت ها</option>
        <option value="comoleted">
          مرتب کردن بر اساس یادداشت های کامل شده
        </option>
      </select>
    </div>
  );
}

export default noteHeader;
