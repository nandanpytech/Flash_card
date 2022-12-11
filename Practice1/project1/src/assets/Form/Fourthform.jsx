import React from 'react'


export default function Fourthform({values,handlechange,back,next}) {
    const {step,firstname,lastname,email,occupation,city,bio}=values
  return (
    <>
    <div className="main">
        <ul>
            <li>Your firstname : {firstname}</li>
            <li>Your lastname: {lastname}</li>
            <li>Your email:{email}</li>
            <li>Your occupation:{occupation}</li>
            <li>Your city:{city}</li>
            <li>Your bio:{bio}</li>
        </ul>
        <button className='firstnext' onClick={back}>Back</button>
    </div>
    </>
  )
}
