import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {

  const [showRegister, setShowRegister] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ isLoggedIn, setIsLoggedIn ] = useState(true)

  const showSignin = () =>{
    setShowLogin(true)
   
  }

  const showLog = () => {
    setShowRegister(true)
  }
  return (
    <>
    <Header 
    showLog={showLog}
    showSignin={showSignin}
    isLoggedIn={isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}
    />
    <Routes>
    <Route path='/*' element={<Home 
       showSignin={showSignin}
       showLog={showLog}
       showRegister={showRegister}
       setShowRegister={setShowRegister}
       showLogin={showLogin}
       setShowLogin={setShowLogin}
       isLoggedIn={isLoggedIn}
       setIsLoggedIn={setIsLoggedIn}
    />} />
    <Route path="create" element={<CreatePost />} />
  </Routes>
  <Footer />
  </>
  )
}

export default App
