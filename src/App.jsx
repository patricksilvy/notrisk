import { useState } from 'react'
import uuid from 'react-uuid';

import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyle from "./styles/global"

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [sidebar, setSidebar] = useState(true)

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Nota Indefinida",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <GlobalStyle/>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <div style={{display: 'flex', width: "100vw"}}>
        <Sidebar
          sidebar={sidebar}
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main 
          sidebar={sidebar}
          activeNote={getActiveNote()} 
          onUpdateNote={onUpdateNote} 
        />
      </div>
    </div>
  );
}

export default App
