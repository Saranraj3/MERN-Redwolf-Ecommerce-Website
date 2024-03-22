import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Anime from './Pages/SectionPages/Anime'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anime-merchandise' element={<Anime />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App