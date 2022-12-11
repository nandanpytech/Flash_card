import React from 'react'

export default function Card({arr,loading}) {
    if(loading){
        return <h1>Loading..</h1>
    }
    if(arr.length==0){
        return <h3>No data found..</h3>
    }
  return (
   <>
   <div className="main">
    {arr.map((items)=>{
        return (<div key={items.id} className="card" style={{width:'18rem'}}>
        <img src={items.ItemImg} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="card-text">
            <ul>
            <li>firstname:{items.firstname}</li>
            <li>Itemprice:{items.Itemprice}</li>
            <li>Rating:{items.Rating}</li>
            <li>Category:{items.Category}</li>
            </ul>
        </p>
        </div>
      </div>)
    })}
   </div>
   </>
  )
}
