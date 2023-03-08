import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const Home = ( {showRegister, setShowRegister, showLogin, setShowLogin} ) => {


 
  return (
    <div className=' relative'>
      <div>
   {
    showRegister && (
      <div>
      <Register 
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
      </div>
    )
   }
   </div>
   <div>
   {
    showLogin && (
      <div>
      <Login 
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      </div>
    )
   }

   </div>
   
  </div>
  )
}

export default Home
