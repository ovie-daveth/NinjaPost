import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'
import Group from './pages/Group'
import Profile from './pages/Profile'
import ChatRoom from './pages/ChatRoom'


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
    <Route path='/group' element={<Group />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/chat" element={<ChatRoom />} />
  </Routes>
  <Footer />
  </>
  )
}

export default App
