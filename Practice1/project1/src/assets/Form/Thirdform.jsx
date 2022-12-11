import React from 'react'

export default function Thirdform({values,handlechange,back,next}) {
    const {step,firstname,lastname,email,occupation,city,bio}=values
  return (
   <><div className="main">
   <form action="" className='form'>
       <label className='label' htmlFor="">Enter your city:</label>
       <input type="text" value={city} onChange={handlechange('city')} name="" id="" />
       <label className='label' htmlFor="">Enter your bio:</label>
       <input type="text" value={bio} onChange={handlechange('bio')} name="" id="" />
       <div className="buttons">
       <button className='firstnext' onClick={back}>Back</button>
       <button className='firstnext' onClick={next}>Next</button>
       </div>
   </form>
</div></>
  )
}
