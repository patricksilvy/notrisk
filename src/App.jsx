import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyle from "./styles/global";

function App() {
  const [theme, setTheme] = useState(
    localStorage.theme ? JSON.parse(localStorage.theme) : light
  );
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);
  const [sidebar, setSidebar] = useState(true)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header
          sidebar={sidebar}
          setSidebar={setSidebar}
          toggleTheme={toggleTheme}
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
    </ThemeProvider>
  );
}

export default App
