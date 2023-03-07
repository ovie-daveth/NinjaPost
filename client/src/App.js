import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/*' element={<Home />} />
    <Route path="create" element={<CreatePost />} />
  </Routes>
  <Footer />
  </>
  )
}

export default App
