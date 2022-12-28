import React,{useState} from 'react'

function AddNote({handleAddNote}) {

    const [noteText,setnoteText]=useState(''); 
    const textLimit=200;

    function handleChange(event){
        if(textLimit-noteText.length>0){
            setnoteText(event.target.value);
        }

        
        
    };

    function handleSaveClick(){
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setnoteText('');
        }
    }

  return (
    <div className='note new'>
        <textarea cols="20" rows="6" value={noteText} placeholder='Type to add more' onChange={handleChange} ></textarea>
        <div className='note-bottom'>
            <small>{textLimit - noteText.length} Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>

    </div>
  )
}

export default AddNote