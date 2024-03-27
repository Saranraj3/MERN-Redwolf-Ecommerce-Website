import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Anime from './Pages/SectionPages/Anime'
import { Login, Signup } from './Pages'
const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/anime-merchandise' element={<Anime />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App