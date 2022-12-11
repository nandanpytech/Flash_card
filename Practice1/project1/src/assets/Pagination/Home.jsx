import {React,useEffect,useState} from 'react'
import axios from 'axios'
import Mypost from './Mypost'
import Pagination from './Pagination'

export default function Home() {
    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(false)
    const [currentpage, setcurrentpage] = useState(1)
    const [postperpage] = useState(10)

    useEffect(() => {
      const fetchpost=async()=>{
        setloading(true)
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        setposts(res.data)
        setloading(false)
    }
    
    fetchpost();
},[])
    const lastpost=currentpage*postperpage
    const firstpost=lastpost-postperpage
    const current_posts=posts.slice(firstpost,lastpost)
    
    const paginate=(number)=>(e)=>{
        e.preventDefault()
        setcurrentpage(number)
    }
  return (
    <>
    <div>My Posts</div>
    <Mypost posts={current_posts} loading={loading}></Mypost>
    <Pagination postperpage={postperpage} paginate={paginate} totalpost={posts.length}></Pagination>
    </>

  )
}
