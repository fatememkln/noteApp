import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((n) => n.id !== payload);
    }
    case "completed": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("Known Error" + type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotes() {
  return useContext(NotesContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDispatchNotes() {
  return useContext(NotesDispatchContext);
}
