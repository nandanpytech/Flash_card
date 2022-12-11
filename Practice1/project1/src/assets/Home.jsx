import {React,useState} from 'react'
import Todo from './Todo'

export default function Home() {
    const [item, setitem] = useState('')
    const [todo, settodo] = useState([])

    const inputhandle=(e)=>{
      console.log(e.target.value)
        setitem(e.target.value)
    }
    const addtodos=(e)=>{
      e.preventDefault();
      settodo([...todo,{text:item,id:Math.random()*1000}])
      setitem('')
    }

  return (
    <>
    <form action="" >
    <input type="text" value={item} onChange={inputhandle} name="" id="" />
    <button onClick={addtodos}>Submit</button>
    </form>
    
    <div style={{display:'flex',flexDirection:'column'}} className="box">
      <Todo settodo={settodo} todo={todo}></Todo>
     
    </div>
    </>
  )
}
