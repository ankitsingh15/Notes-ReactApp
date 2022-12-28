import React from 'react'

function Head({handlechangemode}) {
  return (
    <div className='Headertop'>
        <h1>NOTES</h1>
        <button 
        onClick={()=>{handlechangemode((presentstate)=>!presentstate)}} >Toggle Mode</button>
    </div>
  )
}

export default Head