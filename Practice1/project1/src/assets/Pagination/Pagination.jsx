import React from 'react'


export default function Pagination({postperpage,totalpost,paginate}) {
    const arr=[]
    for (let i = 1; i <=totalpost/postperpage; i++) {
        arr.push(i)   
    }
    console.log(arr)
  return (
    <div className="main">
        {arr.map((e)=>{
            return (
                <button onClick={paginate(e)}>{e}</button>
            )
        })}
    </div>
  )
}
