import React, { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'
import Group from './pages/Group'
import Profile from './pages/Profile'
import ChatRoom from './pages/ChatRoom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Redirect from './pages/Redirect'
import BlogPost from './pages/BlogPost'

const App = () => {
  let location = useLocation();
  const [showRegister, setShowRegister] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  

  const showSignin = () =>{
    setShowLogin(true)
   
  }

  const showLog = () => {
    setShowRegister(true)
  }
  return (
    <>
  {location.pathname !== '/chat' && <Header
   showLog={showLog}
   showSignin={showSignin}
   isLoggedIn={isLoggedIn}
   setIsLoggedIn={setIsLoggedIn}
  />}
    <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable
           pauseOnHover
          theme="dark"
            />
    <Routes>
    <Route path='/' element={<Home 
       showSignin={showSignin}
       showLog={showLog}
       showRegister={showRegister}
       setShowRegister={setShowRegister}
       showLogin={showLogin}
       setShowLogin={setShowLogin}
       isLoggedIn={isLoggedIn}
       setIsLoggedIn={setIsLoggedIn}
    />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path='/group' element={<Group />} />
    <Route path='/post' element={<BlogPost />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="chat" element={ isLoggedIn ? <ChatRoom /> : <Redirect /> } />
  </Routes>
  {location.pathname !== '/chat' && <Footer />}
  </>
  )
}

export default App
