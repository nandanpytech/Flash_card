import React from 'react'

export default function Search({searchInput,inputchange,searchItem}) {
  return (
    <>
    <form action="">
        <input type="text" onChange={inputchange} value={searchInput} name="" id="" />
        <button onClick={searchItem}>Search</button>
    </form>
    </>
  )
}
