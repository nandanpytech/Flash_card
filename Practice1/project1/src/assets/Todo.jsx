import React from 'react'
import Todolist from './Todolist'

export default function Todo({todo,settodo}) {
  return (
    <>
    {todo.map((item)=>{
     return <Todolist settodo={settodo} todo={todo} item={item}  key={item.id} item_text={item.text}></Todolist>
      })}
    </>
  )
}
