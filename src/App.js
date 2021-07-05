import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
import { CreateArea } from "./components/CreateArea";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(createNote) {
    setNotes((prevValue) => [...prevValue, createNote]);
  }

  function handleDelete(id) {
    const updateList = notes.filter((item, index) => index !== id);
    setNotes(updateList);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
