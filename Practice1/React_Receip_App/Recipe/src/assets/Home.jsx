import {React,useState,useEffect} from 'react'
import Search from './Search'
import axios from 'axios'
import Card from './Card'
import './Recipe.css'



export default function Home() {
    const [searchInput, setsearchInput] = useState('')
    const [loading, setloading] = useState(false)
    const [arr, setarr] = useState([])
    const [Items, setItems] = useState([])

    const inputchange=(e)=>{
        setsearchInput(e.target.value)
    }
    useEffect(() => {
        const searchItem=async()=>{
            setloading(true)
            const res=await axios.get('https://restrajesh.herokuapp.com/')
            setarr(res.data)
            setItems(res.data)
            setloading(false)
    
        }
        searchItem();
    
    }, [])
    
    const searchItem=(e)=>{
        e.preventDefault()
        const name=searchInput.charAt(0).toUpperCase()+searchInput.slice(1)
        console.log(name)
        const newarr=arr.filter((e)=>e.Category.includes(name) || e.firstname.includes(name))
        setItems(newarr)
        setsearchInput('')
    }
   
  return (
    <>
    <h1>My Restaurant App</h1>
    <Search searchItem={searchItem} inputchange={inputchange}  searchInput={searchInput}></Search>
    <Card loading={loading} arr={Items}></Card>
    </>
  )
}
