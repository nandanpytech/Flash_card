import React from 'react'

export default function Todolist({item_text,settodo,todo,item}) {
    
    const deletitem=()=>{
       settodo(todo.filter((el)=>el.id!==item.id));
      }
  return (
<>
<div style={{display:'flex',flexDirection:'row'}} className="list">
         <p>{item_text}</p>
         <button>Edit</button>
         <button onClick={deletitem}> Cancel</button>
</div>
</>
  )
}
