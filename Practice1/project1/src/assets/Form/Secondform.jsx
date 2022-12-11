import React from 'react'


export default function Secondform({values,handlechange,back,next}) {
  const {step,firstname,lastname,email,occupation,city,bio}=values
  return (
    <div className="main">
        <form action="" className='form'>
            <label className='label' htmlFor="">Enter your email:</label>
            <input type="text" value={email} onChange={handlechange('email')} name="" id="" />
            <label className='label' htmlFor="">Enter your occupation:</label>
            <input type="text" value={occupation} onChange={handlechange('occupation')} name="" id="" />
            <div className="buttons">
            <button className='firstnext' onClick={back}>Back</button>
            <button className='firstnext' onClick={next}>Next</button>
            </div>
        </form>
    </div>
  )
}
