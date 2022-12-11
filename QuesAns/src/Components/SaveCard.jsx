import React from 'react'

export default function SaveCard({data,index,index_,setindex_,array,setarray,button,handlequestionans,editIndex}) {
  const deletmodal=()=>{
    if(array.length==1){
      setindex_(index_-1)
      setarray([])
    }else{
      setindex_(index_-1)
      const newarr=array.filter((ele)=>{
        return ele.index!=index
       })
       setarray(newarr)
    }
  
  }
  const editmodal=()=>{
    button.click()
    const questiontext=array[index].ques
    const answertext=array[index].ans
    handlequestionans(questiontext,answertext)
    editIndex(data.index)
    
  }
  return (
    <>
    <div id={index} className="card my-5 mx-3" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{data.ques}</h5>
    <p className="card-text">{data.ans}</p>
    <button type="button" onClick={editmodal} className="btn btn-outline-success mx-3">Edit</button>
<button type="button" onClick={deletmodal} className="btn btn-outline-danger">Delete</button>
  </div>
</div>
    </>
  )
}
