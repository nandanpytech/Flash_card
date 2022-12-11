import {React,useState} from 'react'
import Fourthform from './Fourthform'
import Secondform from './Secondform'
import Thirdform from './Thirdform'
import  '../Form/index.css'

export default function FirstForm() {
    const [arr, setarr] = useState({step:1,firstname:'',lastname:'',email:'',occupation:'',city:'',bio:''})
    const {step,firstname,lastname,email,occupation,city,bio}=arr
    const values= {step,firstname,lastname,email,occupation,city,bio}
    const handlechange=(name)=>(e)=>{
       setarr({...arr,[name]:e.target.value})
       console.log(arr)
    }
    const next=(e)=>{
        e.preventDefault();
        setarr({...arr,step:step+1})
    }
    const back=(e)=>{
        e.preventDefault();
        setarr({...arr,step:step-1})
    }
    switch (step){
        case 2:
            return (<Secondform next={next} back={back} handlechange={handlechange} values={values}></Secondform>)
        case 3:
            return (<Thirdform  next={next} back={back} handlechange={handlechange} values={values}></Thirdform >)
        case 4:
            return (<Fourthform next={next} back={back} handlechange={handlechange} values={values}></Fourthform>)
           
    }
  return (
    <>
    <div className="main">
        <form action="" className='form'>
            <label className='label' htmlFor="">Enter your firstname:</label>
            <input type="text" value={firstname} onChange={handlechange('firstname')} name="" id="" />
            <label className='label' htmlFor="">Enter your lastname:</label>
            <input type="text" value={lastname} onChange={handlechange('lastname')} name="" id="" />

            <button className='firstnext' onClick={next}>Next</button>
        </form>
    </div>
    </>
  )
}
