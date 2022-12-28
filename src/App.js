
import './App.css';
import {nanoid} from 'nanoid';
import Notelist from './components/Notelist';
import {useState,useEffect } from 'react';
import { MdLinkOff } from 'react-icons/md';
import Search from './components/search';
import Head from './components/Head';


function App() {

  const [notes,setNotes]=useState([
    {
        id:nanoid(),
        text:'This is my first node',
        date:'15/04/2021',
    },
    {
        id:nanoid(),
        text:'This is my first node',
        date:'15/04/2021',
        },
    {
        id:nanoid(),
        text:'This is my second node',
        date:'15/04/2021',
        },
    {
        id:nanoid(),
        text:'This is my third node',
        date:'15/04/2021',
        },
        {
          id:nanoid(),
          text:'This is my last node',
          date:'15/04/2021',
      },


]);

  const [searchText,setSearchText]=useState('');

  const [changemode,setchangemode]=useState(false);

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }

  },[])


  //To save the data to Local Storage
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes]);

  const addNode=(text)=>{
      const date=new Date();
      const newNote={
        id:nanoid(),
        text:text,
        date: date.toLocaleDateString()

      }
      const newNotes=[...notes,newNote];
      setNotes(newNotes);
  }

  const deleteNode=(id)=>{
    const newNotes=notes.filter((note)=>note.id!=id);
    setNotes(newNotes);
  }



  return (
    <div className={`${changemode && 'dark-mode'}`}>
    <div className='container'>
      <Head handlechangemode={setchangemode}/>
      <Search handlesearchNote={setSearchText}/>
      <Notelist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNode}
      handleDeleteNote={deleteNode}/>
    </div>
    </div>
  );
}

export default App;
