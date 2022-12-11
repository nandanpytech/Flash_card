import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'

export default function Home() {
    const {openSidebar, openModal}=useContext(AppContext)
  return (
    <div>Home</div>
  )
}
