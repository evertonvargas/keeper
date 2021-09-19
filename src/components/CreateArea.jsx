import React, { useState } from "react";

export function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    const {name, value} = event.target;
    setCreateNote(prevValue=> ({...prevValue, [name]:value}))
  }

  function handleClick(event){
    props.addNote(createNote)
    setCreateNote({title: "", content:""})
    event.preventDefault()
  }

  return (
    <div className="center">
      <form>
        <input onChange={handleChange} name="title" placeholder="Título" value={createNote.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Faça uma nota..." rows="3" value={createNote.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}