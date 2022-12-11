import React from 'react'

export default function Mypost({posts,loading}) {
    if(loading){
        return <h1>Loading..</h1>
    }
  return (
    <ul>
        {posts.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
  )
}
