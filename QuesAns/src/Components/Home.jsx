import {React} from 'react'
import SaveCard from './SaveCard'
import { useState } from 'react'

export default function Home() {
  const [question, setquestion] = useState('')
  const [index_, setindex_] = useState(0)
  const [answer, setanswer] = useState('')
  const [array, setarray] = useState([])
  const [editindex, seteditindex] = useState(-1)

  const initialhandler=()=>{
    seteditindex(-1)
    setquestion("")
    setanswer("")
  }
  const submitmodal=()=>{
    setarray([...array,{ques:question,ans:answer,index:index_}])
    setindex_(index_+1)
    setquestion("")
    setanswer("")
    console.log(array)
  }
  const handlequestionans=(questiontext,answertext)=>{
    setquestion(questiontext)
    setanswer(answertext)
  }
  const editIndex=(num)=>{
    seteditindex(num)
  }
  const savechange=()=>{
   const newstate=array.map((obj)=>{
    if(obj.index==editindex){
      return {...obj,ques:question,ans:answer}
    }
    return obj
   })
   setarray(newstate)
  }


  return (
    <>
    <h1 id='flash'>Flashcards</h1>
<button type="button"  onClick={initialhandler} className="btn btn-primary" id='modalsubmit' data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Question
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div className="mb-3" id='modalques'>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Question</label>
             <textarea className="form-control question" onChange={(e)=>setquestion(e.target.value)} value={question} id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <div className="mb-3" id='modalques'>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Answer</label>
            <textarea className="form-control answer" onChange={(e)=>setanswer(e.target.value)} value={answer} id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       {editindex!=-1?  <button type="button" className="btn btn-primary" onClick={savechange}>Save Changes</button>:
       <button type="button" className="btn btn-primary"   onClick={submitmodal}>Submit</button>}
      
      </div>
    </div>
  </div>
</div>
    <div className="Maincard">
    {array.map((data,index)=>{
      const button=document.getElementById("modalsubmit")
      return <SaveCard data={data} index_={index_} setindex_={setindex_} array={array} editIndex={editIndex} handlequestionans={handlequestionans}  submitmodal={submitmodal}  button={button} key={index} setarray={setarray} index={index}></SaveCard>
    })}
    </div>
    </>
  )
}
