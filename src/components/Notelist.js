import React from 'react'
import Note from './Note'
import {useState } from 'react';
import AddNote from './AddNote';
import Search from './search';

function Notelist({notes,handleAddNote,handleDeleteNote}) {

    

    

  return (
    <div className='notelist'>
        {notes.map((note)=>(
            <Note id={note.id}
             date={note.date} 
             text={note.text} 
             handleDeleteNote={handleDeleteNote}
            />
        ))}

        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default Notelist