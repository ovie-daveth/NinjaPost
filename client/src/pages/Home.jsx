import React, { useState } from 'react'
import Register from '../components/Register'

const Home = () => {

  const [showRegister, setShowRegister] = useState(true)
  return (
    <div className=' relative'>
      Home
    <div className={`  ${ showRegister ? 'hidden' : 'block' } `}>
       <Register />
    </div>
   
    </div>
  )
}

export default Home
