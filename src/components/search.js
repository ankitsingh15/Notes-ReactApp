
import React,{useState} from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handlesearchNote}) {
    
    function currentsearchText(event){
        handlesearchNote(event.target.value);
    }

  return (
    <div className='searchbox'>
        <MdSearch className=''/>
        <input type="text" onChange={currentsearchText} size='1.3rem'/>
    </div>
  )
}

export default Search